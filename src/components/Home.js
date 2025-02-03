import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      {/* First line: text left and image right */}
      <div className="first-line">
        <div className="home-text">
        <img src="/images/ring.jpg" alt="Guy" className="ring-image" />
          <p>Varsammi Meme Coin is where degen culture meets the digital revolution. Built on Solana for speed, efficiency, and pure chaos, just like Varsammi likes to party. It’s not just about a mem coin or party, it’s a movement. Whether you’re here to send it to the moon or just enjoy the ride, one thing’s for sure Varsammi keeps the party going.</p>
        </div>
      </div>

      {/* MoonShot Button */}
   {/*   <div id="moonshot" className="moonshot-container">
        <a href="https://dexscreener.com/solana/54BFd8qXuhDHDY4Cx7JrANWfVcAmQZaYmJYCb485pump" className="moonshot-button" target="_blank" rel="noopener noreferrer">
          MoonShot 🚀
        </a>
      </div> */}

      {/* Second line: image and text */}
      <div className="second-line">
        <img src="/images/floor.webp" alt="Floor" className="home-image" />
        <div className="home-text">
          <h2>Why Varsammi Meme Coin</h2>
          <p>Varsammi Meme Coin isn't just another cryptocurrency it's a game-changer. With a community of degenerates who love to party, Varsammi is redefining how we interact with digital assets. Be part of a meme coin that prioritizes partying long term to gain growth and sustainability.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;