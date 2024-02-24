// Creature.js
import React from 'react';
import { CreatureContainer, CreatureImage, Eye, Fin } from './Styled';

function Creature() {
  return (
    <CreatureContainer>
      {/* Render underwater creature */}
      <CreatureImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {/* Main body */}
        <circle cx="50" cy="50" r="40" fill="#00f" />
        {/* Eyes */}
        <Eye cx="35" cy="40" />
        <Eye cx="65" cy="40" />
        {/* Mouth */}
        <path d="M 40 70 Q 50 80 60 70" fill="none" stroke="#fff" strokeWidth="3" />
        {/* Fins */}
        <Fin x1="25" y1="60" x2="45" y2="45" />
        <Fin x1="75" y1="60" x2="55" y2="45" />
      </CreatureImage>
    </CreatureContainer>
  );
}

export default Creature;
