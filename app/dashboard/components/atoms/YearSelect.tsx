type Props = {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
};

export default function YearSelect({ years, selectedYear, onChange }: Props) {
  return (
    <select
      value={selectedYear}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border px-3 py-2 rounded"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}