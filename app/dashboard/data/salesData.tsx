import { SalesRecord } from "../type/sales";

export const salesDataByYear: Record<number, SalesRecord[]> = {
  2023: [
    { month: "Jan", sales: 200 },
    { month: "Feb", sales: 220 },
    { month: "Mar", sales: 240 },
  ],
  2024: [
    { month: "Jan", sales: 250 },
    { month: "Feb", sales: 270 },
    { month: "Mar", sales: 290 },
  ],
  2025: [
    { month: "Jan", sales: 300 },
    { month: "Feb", sales: 320 },
    { month: "Mar", sales: 350 },
  ],
};
