"use client";

import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <Text>{title}</Text>
      <Heading>{value}</Heading>
    </div>
  );
}