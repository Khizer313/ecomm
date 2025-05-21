import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  hours: number;
  days: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    days: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const counterItems = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="flex space-x-2 sm:space-x-4 my-4 sm:my-6">
      {counterItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center flex-col">
            <span className="text-sm sm:text-base md:text-lg font-bold">
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs mt-1 text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;