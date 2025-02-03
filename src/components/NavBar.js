import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTelegram, faThreads } from '@fortawesome/free-brands-svg-icons';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-social">
        <a href="https://www.instagram.com/varsammi/" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.threads.net/@varsammi" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faThreads} size="2x" />
        </a>
        <a href="https://t.me/alpinecalls" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://tiktok.com/@varsammi" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home" className="navbar-link">Home</a>
        </li>
    {/*    <li>
          <a href="https://dexscreener.com/solana/54BFd8qXuhDHDY4Cx7JrANWfVcAmQZaYmJYCb485pump" className="navbar-link" target="_blank" rel="noopener noreferrer">Buy</a>
        </li> */}
        <li>
          <a href="#slots" className="navbar-link">Slots</a>
        </li>
        <li>
          <a href="#party" className="navbar-link">Party</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;