"use client";

import React from "react";

interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h3 className="text-xl font-semibold" suppressHydrationWarning>
      {children}
    </h3>
  );
}
