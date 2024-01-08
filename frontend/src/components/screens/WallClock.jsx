import React, { useState, useEffect } from 'react';

const WallClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second: '2-digit' });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-6xl font-bold">
        {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default WallClock;
