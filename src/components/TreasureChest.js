// TreasureChest.js
import React from 'react';
import { TreasureChestContainer, ChestIcon, ChestText } from './Styled';

function TreasureChest({ onClick }) {
  return (
    <TreasureChestContainer onClick={onClick}>
      <ChestIcon>
        {/* Add an icon or image representing the treasure chest */}
        🏆
      </ChestIcon>
      <ChestText>Click to collect treasure!</ChestText>
    </TreasureChestContainer>
  );
}

export default TreasureChest;
