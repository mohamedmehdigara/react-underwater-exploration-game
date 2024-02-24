// Creature.js
import React from 'react';
import { CreatureContainer, CreatureImage } from './Styled';

function Creature({ onClick }) {
  return (
    <CreatureContainer>
      {/* Render underwater creature */}
      <CreatureImage
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        onClick={onClick}
      >
        {/* Add SVG paths to create the creature */}
        <circle cx="50" cy="50" r="40" fill="#00f" />
        <circle cx="30" cy="40" r="10" fill="#fff" />
        <circle cx="70" cy="40" r="10" fill="#fff" />
        <path d="M 40 70 Q 50 80 60 70" fill="none" stroke="#fff" strokeWidth="3" />
      </CreatureImage>
    </CreatureContainer>
  );
}

export default Creature;
