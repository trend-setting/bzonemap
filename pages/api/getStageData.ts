import { getSheetData } from "@/lib/sheets";
import { NextApiRequest, NextApiResponse } from "next";

const sheetId = process.env.GOOGLE_SHEET_ID as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const stage  = req.query.stage as string;
  console.log(stage);

  if (!stage) {
    res.status(400).json({ error: "Stage parameter is required" });
    return;
  }

  try {
    const range: string = `${stage}!A1:C20`; // Adjust range based on your sheet structure
    const data: string[][] = await getSheetData(sheetId, range);
    res.status(200).json(data.slice(1)); // Skip header row
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
