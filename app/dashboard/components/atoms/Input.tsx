"use client";

interface Props {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="border rounded-md px-3 py-2"
    />
  );
}