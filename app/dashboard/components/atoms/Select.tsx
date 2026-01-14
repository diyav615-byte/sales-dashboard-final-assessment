"use client";

interface Props {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export default function Select({ value, onChange, children }: Props) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border rounded-md px-3 py-2"
    >
      {children}
    </select>
  );
}