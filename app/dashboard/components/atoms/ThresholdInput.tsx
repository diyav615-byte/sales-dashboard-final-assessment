type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function ThresholdInput({ value, onChange }: Props) {
  return (
    <input
      type="number"
      placeholder="Enter threshold"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border px-3 py-2 rounded"
    />
  );
}