'use client';

import { useState, useEffect } from 'react';

type TimeUnit = {
  value: number;
  label: string;
};

export function Countdown({ eventDate }: { eventDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // We need to set the initial value on the client to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  if (!isClient) {
    return null; // Or a loading skeleton
  }

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-lg bg-card border shadow-lg p-6 md:p-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold font-headline text-primary mb-6">
                Event Starts In
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {timeUnits.map((unit, index) => (
                    <div key={index} className="p-4 rounded-lg bg-primary/10">
                        <div className="text-4xl md:text-6xl font-bold font-mono text-primary">
                            {String(unit.value).padStart(2, '0')}
                        </div>
                        <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                            {unit.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
