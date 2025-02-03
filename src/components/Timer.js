import React, { useState, useEffect } from 'react';
import './styles/Timer.css';

const Timer = () => {
  // Set target date (Thursday, February 6th, 2025, 8:00 PM NYC)
  const targetDate = new Date('2025-02-06T20:00:00-05:00'); // NYC timezone (GMT-5)

  // State to store the time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  // Function to calculate the time remaining
  function calculateTimeLeft(target) {
    const now = new Date();
    const difference = target - now;
    
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Cleanup interval when component is unmounted
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="timer-container">
      {/* Countdown Timer Display */}
      <div className="timer-text">
        <p>{`Time Left: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer-timer">
        <p>
          When the timer goes off, the party starts!!
        </p>
      </div>

    </div>
  );
};

export default Timer;
