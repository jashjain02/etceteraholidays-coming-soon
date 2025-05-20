"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set a fixed launch date
  const LAUNCH_DATE = new Date("2025-06-06T12:00:00Z").getTime();
  
  // Always start with zeros to match server
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Use mounted state to control when to start showing real data
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Calculate time left based on fixed launch date
    const calculateTimeLeft = () => {
      const difference = LAUNCH_DATE - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());
    
    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  // Format time values to always show two digits
  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: "Days", value: formatTime(mounted ? timeLeft.days : 0) },
    { label: "Hours", value: formatTime(mounted ? timeLeft.hours : 0) },
    { label: "Minutes", value: formatTime(mounted ? timeLeft.minutes : 0) },
    { label: "Seconds", value: formatTime(mounted ? timeLeft.seconds : 0) },
  ];

  return (
    <div className="text-center">
      <h2 className="text-xl md:text-2xl font-medium mb-5 text-white">
        We&apos;re Launching In
      </h2>
      <div className="flex justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className="relative group"
          >
            <div className="w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-[0.3rem] flex flex-col items-center justify-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                  {unit.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {unit.label}
                </span>
              </div>
            </div>
            {index < timeUnits.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-2xl font-bold text-white/60">:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;