import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-text">
        This Is Not Financial Advice
      </h1>
      {/* Disclaimer Section */}
      <div className="disclaimer-phantom">
        <p>
          Always verify the contract address before making a swap to ensure you're interacting with the correct meme coin.
          Swapping meme coins involves risks; proceed with caution.
        </p>
      </div>
    </div>
  );
};

export default Header;