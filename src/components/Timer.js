import React from 'react';
import './styles/Timer.css';

const Timer = () => {
  return (
    <div className="timer-container">
      {/* MoonShot Button */}
      <div id="moonshot" className="moonshot-container">
        <a href="https://dexscreener.com/solana/D14sLxQFSAEVCDbHrwUZSkBtBzKzCJaT5GZzPtJ8moon" 
           className="moonshot-button" 
           target="_blank" 
           rel="noopener noreferrer">
          MoonShot 🚀
        </a>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer-timer">
        <p>
          Click the MoonShot button to launch into the action! 🚀
        </p>
      </div>
    </div>
  );
};

export default Timer;