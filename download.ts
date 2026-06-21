import fs from 'fs';
import path from 'path';

async function download(url: string, dest: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
  await download("https://i.postimg.cc/ht6W1x91/68b07306391b4b688a5d4596ab51e043.png", "./public/assets/illustrations/pay-safely.png");
  await download("https://i.postimg.cc/66YPhnKX/17edfa9a13084286b0997ff2c75b0f71.png", "./public/assets/illustrations/find-house.png");
  await download("https://i.postimg.cc/xdp5WDf0/8f25619786f64909af838117d6f66f5d.png", "./public/assets/illustrations/check-safety.png");
  console.log("Downloaded images.");
}

main().catch(console.error);
