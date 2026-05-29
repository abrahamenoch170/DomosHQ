import fs from 'node:fs/promises';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Starts the Express server with SSR and Vite middleware.
 */
async function startServer() {
  const app = express();
  const PORT = 3000;

  // --- SEO & LLM Endpoints ---
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nAllow: /\nSitemap: https://mydomos.org/sitemap.xml');
  });

  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mydomos.org/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
  });

  app.get('/llm.json', (req, res) => {
    res.json({
      name: "MyDomos",
      description: "Africa's rental trust infrastructure. Rent safely, pay monthly, and build a trusted track record.",
      features: [
        "Find any house anywhere",
        "Check safety and lock terms with MyDomos",
        "Pay safely with clear shared records and monthly options"
      ],
      key_pages: ["/"]
    });
  });

  app.get('/ai-index.json', (req, res) => {
    res.redirect('/llm.json');
  });

  // --- SSR & Middleware ---
  const isProduction = process.env.NODE_ENV === 'production';
  let vite: any;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist/client'), { index: false }));
  }

  // --- SSR Handler ---
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template, render;
      if (!isProduction) {
        template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8');
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (!isProduction) vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
