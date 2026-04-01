import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
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
};
