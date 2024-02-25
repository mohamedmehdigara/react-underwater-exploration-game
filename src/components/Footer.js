// Footer.js
import React from 'react';
import { FooterContainer, ControlButton, InfoText } from './Styled';

function Footer() {
  const handlePause = () => {
    // Logic to pause the game
    console.log('Game paused');
  };

  const handleRestart = () => {
    // Logic to restart the game
    console.log('Game restarted');
  };

  return (
    <FooterContainer>
      {/* Render game controls and information */}
      <div>
        <ControlButton onClick={handlePause}>Pause</ControlButton>
        <ControlButton onClick={handleRestart}>Restart</ControlButton>
        {/* Add more control buttons if needed */}
      </div>
      <InfoText>
        <p>Controls: Use arrow keys to move</p>
        <p>Collect treasures and solve mysteries to uncover the secrets of the ocean!</p>
        {/* Add more informative text for players */}
      </InfoText>
    </FooterContainer>
  );
}

export default Footer;
