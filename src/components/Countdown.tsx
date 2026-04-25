"use client";

import { useEffect, useState } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      
      if (now >= target) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: differenceInDays(target, now),
        hours: differenceInHours(target, now) % 24,
        minutes: differenceInMinutes(target, now) % 60,
        seconds: differenceInSeconds(target, now) % 60,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className="flex gap-4 md:gap-8 justify-center text-primary opacity-0">
        {[ "Days", "Hours", "Mins", "Secs" ].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-serif">00</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans opacity-70">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 md:gap-8 justify-center text-primary">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-serif">{item.value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans opacity-70">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
