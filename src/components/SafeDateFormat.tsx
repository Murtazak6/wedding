"use client";

import { useEffect, useState } from "react";

interface SafeDateFormatProps {
  date: string;
}

export default function SafeDateFormat({ date }: SafeDateFormatProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    );
  }, [date]);

  return <>{formattedDate || "Loading date..."}</>;
}
