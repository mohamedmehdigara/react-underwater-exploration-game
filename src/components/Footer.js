// Footer.js
import React from 'react';
import { FooterContainer, ControlButton } from './Styled';

function Footer() {
  return (
    <FooterContainer>
      {/* Render game controls and information */}
      <div>
        <ControlButton onClick={handlePause}>Pause</ControlButton>
        <ControlButton onClick={handleRestart}>Restart</ControlButton>
      </div>
      <p>Controls: Use arrow keys to move</p>
      <p>Explore the depths of the ocean in this captivating adventure game!</p>
    </FooterContainer>
  );
}

function handlePause() {
  // Logic to pause the game
}

function handleRestart() {
  // Logic to restart the game
}

export default Footer;
