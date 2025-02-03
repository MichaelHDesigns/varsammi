import React from 'react';
import './styles/Phantom.css';

function Phantom() {
  return (
    <div className="phantom-container">
      {/* Video Section */}
      <div className="phantom-videos">
<div className="phantom-video">
  <h1 className="phantom-title">Phantom on Mobile</h1>
  <iframe
    src="https://www.youtube.com/embed/FPQxbV6bkoM"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

        <div className="phantom-video">
          <h1 className="phantom-title">Phantom on Computer</h1> {/* Added Title */}
          <iframe
            src="https://www.youtube.com/embed/N3BdsrBOKak"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

<div className="phantom-video">
  <h1 className="phantom-title">Buy Solana on Phantom</h1>
  <iframe
    src="https://www.youtube.com/embed/4MPkrpYTc1k"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

<div className="phantom-video">
  <h1 className="phantom-title">Buy Meme Coins</h1>
  <iframe
    src="https://www.youtube.com/embed/Q5OnE2SIF1A"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

<div className="phantom-video">
  <h1 className="phantom-title">Sell Meme Coins</h1>
  <iframe
    src="https://www.youtube.com/embed/TSOk8MPX_Mc"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

<div className="phantom-video">
  <h1 className="phantom-title">Sell Solana</h1>
  <iframe
    src="https://www.youtube.com/embed/NDjoW4Sl_94"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
      </div>
    </div>
  );
}

export default Phantom;