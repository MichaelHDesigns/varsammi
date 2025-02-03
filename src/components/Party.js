import React from 'react';
import './styles/Party.css';

const Party = () => {
  return (
    <div id="party" className="party-container">
      {/* First line: text left and image right */}
      <div className="first-line">
        <div className="party-text">
          <h1>Join the Varsammi Party!</h1>
          <p>The party doesn't stop when you win with Varsammi. Step into the crypto scene, spin the wheels of fortune, and enjoy every moment with a community that knows how to celebrate big wins. Varsammi isn't just a meme coin, it's the life of the party!</p>
          
          {/* MoonShot Button */}
      {/*    <div id="moonshot" className="moonshot-container">
            <a href="https://dexscreener.com/solana/54BFd8qXuhDHDY4Cx7JrANWfVcAmQZaYmJYCb485pump" className="moonshot-button" target="_blank" rel="noopener noreferrer">
              MoonShot 🚀
            </a>
          </div> */}

        </div>
        <img src="/images/club.webp" alt="Club" className="party-image" />
      </div>
    </div>
  );
};

export default Party;
