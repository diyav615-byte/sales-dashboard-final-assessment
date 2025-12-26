import SalesChart from "./dashboard/components/molecules/SalesChart";

const salesData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 2000 },
  { month: "Apr", value: 2780 },
  { month: "May", value: 1890 },
  { month: "Jun", value: 2390 },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>

      <p className="mt-4 text-gray-600">
        This is my first Next.js dashboard project.
      </p>

      <div className="mt-8">
        <SalesChart data={salesData} />
      </div>
    </main>
  );
}
