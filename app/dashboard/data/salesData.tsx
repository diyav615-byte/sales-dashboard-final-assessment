export type SalesRecord = {
  month: string;
  value: number;
};

export const salesDataByYear: Record<number, SalesRecord[]> = {
  2023: [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 220 },
    { month: "Mar", value: 240 },
    { month: "Apr", value: 230 },
    { month: "May", value: 260 },
    { month: "Jun", value: 280 },
  ],
  2024: [
    { month: "Jan", value: 250 },
    { month: "Feb", value: 270 },
    { month: "Mar", value: 290 },
    { month: "Apr", value: 310 },
    { month: "May", value: 330 },
    { month: "Jun", value: 360 },
  ],
  2025: [
    { month: "Jan", value: 300 },
    { month: "Feb", value: 320 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 370 },
    { month: "May", value: 400 },
    { month: "Jun", value: 430 },
  ],
};