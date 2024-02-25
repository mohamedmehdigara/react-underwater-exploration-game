// TreasureChest.js
import React, { useState } from 'react';
import { TreasureChestContainer, ChestIcon, ChestText, ChestParticles } from './Styled';

function TreasureChest({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Ensure onClick is a function before calling it
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <TreasureChestContainer onClick={handleClick}>
      <ChestIcon>
        {/* Add an icon or image representing the closed or open treasure chest */}
        {isOpen ? '🎉' : '🏆'}
      </ChestIcon>
      <ChestText>{isOpen ? 'Treasure Collected!' : 'Click to collect treasure!'}</ChestText>
      {isOpen && <ChestParticles />}
    </TreasureChestContainer>
  );
}

export default TreasureChest;
