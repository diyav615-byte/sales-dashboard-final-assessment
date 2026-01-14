export type SalesRecord = {
  month: string;
  sales: number;
};

export type SalesDataByYear = {
  2023: SalesRecord[];
  2024: SalesRecord[];
  2025: SalesRecord[];
};

export const salesData: SalesDataByYear = {
  2023: [
    { month: "Jan", sales: 82000 },
    { month: "Feb", sales: 90000 },
    { month: "Mar", sales: 95000 },
    { month: "Apr", sales: 100000 },
    { month: "May", sales: 105000 },
    { month: "Jun", sales: 108000 },
    { month: "Jul", sales: 110000 },
    { month: "Aug", sales: 112000 },
    { month: "Sep", sales: 115000 },
    { month: "Oct", sales: 118000 },
    { month: "Nov", sales: 120000 },
    { month: "Dec", sales: 125000 },
  ],

  2024: [
    { month: "Jan", sales: 88000 },
    { month: "Feb", sales: 94000 },
    { month: "Mar", sales: 101000 },
    { month: "Apr", sales: 98000 },
    { month: "May", sales: 107000 },
    { month: "Jun", sales: 114000 },
    { month: "Jul", sales: 121000 },
    { month: "Aug", sales: 118000 },
    { month: "Sep", sales: 125000 },
    { month: "Oct", sales: 132000 },
    { month: "Nov", sales: 139000 },
    { month: "Dec", sales: 152000 },
  ],

  2025: [
    { month: "Jan", sales: 90000 },
    { month: "Feb", sales: 97000 },
    { month: "Mar", sales: 103000 },
    { month: "Apr", sales: 108000 },
    { month: "May", sales: 110000 },
    { month: "Jun", sales: 114000 },
    { month: "Jul", sales: 120000 },
    { month: "Aug", sales: 118000 },
    { month: "Sep", sales: 124000 },
    { month: "Oct", sales: 130000 },
    { month: "Nov", sales: 136000 },
    { month: "Dec", sales: 140000 },
  ],
};
