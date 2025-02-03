import React from 'react';
import './styles/Slots.css';

const Slots = () => {
  return (
    <div id="slots" className="slots-container">
      {/* First line: text left and image right */}
      <div className="first-line">
        <div className="slots-text">
          <h1>Party with Varsammi!</h1>
          <p>Come party with Varsammi Meme Coin, will you hit the jackpot or lose it all? Either way, you're in for a spin! <br />
            Join Varsammi on <a href="https://www.instagram.com/varsammi/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.threads.net/@varsammi" target="_blank" rel="noopener noreferrer">Threads</a>, and <a href="https://t.me/alpinecalls" target="_blank" rel="noopener noreferrer">Telegram</a>!
          </p>
        </div>
        <img src="/images/slots.webp" alt="Slots" className="slots-image" />
      </div>

      {/* MoonShot Button */}
    {/*  <div id="moonshot" className="moonshot-container">
        <a href="https://dexscreener.com/solana/54BFd8qXuhDHDY4Cx7JrANWfVcAmQZaYmJYCb485pump" className="moonshot-button" target="_blank" rel="noopener noreferrer">
          MoonShot 🚀
        </a>
      </div>  */}

      {/* Second line: image and text */}
      <div className="second-line">
        <img src="/images/slot1.webp" alt="Slot 1" className="slots-image" />
        <div className="slots-text">
          <h2>The Power of Varsammi</h2>
          <p>Varsammi isn’t just a meme coin it’s a lifestyle. From the glitz and glamour of crypto to the exclusive parties, Varsammi is everywhere. With a strong social presence, Varsammi brings you closer to the action. Join a community where success and fun collide, and where every spin could unlock new opportunities in the world of crypto. Whether you're partying or degening it out, Varsammi is your ticket to the next big thing in the crypto space.</p>
        </div>
      </div>
    </div>
  );
};

export default Slots;