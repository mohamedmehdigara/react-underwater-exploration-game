import React, { useState } from 'react';
import { TreasureChestContainer, ChestIcon, ChestText, ChestParticles, MysteryButton } from './Styled';

function TreasureChest({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    // Ensure onClick is a function before calling it
    if (typeof onClick === 'function' && !isOpen) {
      onClick();
      setIsOpen(true);
    }
  };

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <TreasureChestContainer onClick={handleClick}>
      <ChestIcon>
        {/* Add an icon or image representing the closed or open treasure chest */}
        {isOpen ? '🎉' : '🏆'}
      </ChestIcon>
      <ChestText>{isOpen ? 'Treasure Collected!' : 'Click to collect treasure!'}</ChestText>
      {isOpen && !revealed && (
        <MysteryButton onClick={handleReveal}>Reveal Mystery</MysteryButton>
      )}
      {isOpen && revealed && <ChestParticles />}
    </TreasureChestContainer>
  );
}

export default TreasureChest;
