// Creature.js
import React from 'react';
import { CreatureContainer, CreatureImage, Eye, Fin } from './Styled';

function Creature({ type, color, size, onClick }) {
  return (
    <CreatureContainer>
      {/* Render underwater creature */}
      <CreatureImage
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        onClick={onClick}
      >
        {/* Customize creature based on type */}
        {type === 'fish' && (
          <>
            {/* Fish body */}
            <circle cx="50" cy="50" r={size} fill={color} />
            {/* Fish eyes */}
            <Eye cx="40" cy="45" />
            <Eye cx="60" cy="45" />
            {/* Fish fins */}
            <Fin x1="30" y1="50" x2="20" y2="60" />
            <Fin x1="70" y1="50" x2="80" y2="60" />
          </>
        )}
        {type === 'jellyfish' && (
          <>
            {/* Jellyfish body */}
            <circle cx="50" cy="50" r={size * 1.5} fill={color} />
            {/* Jellyfish tentacles */}
            <path d="M 50 65 Q 30 80 20 100" fill="none" stroke="#fff" strokeWidth="3" />
            <path d="M 50 65 Q 70 80 80 100" fill="none" stroke="#fff" strokeWidth="3" />
          </>
        )}
        {/* Add more creature types and variations */}
      </CreatureImage>
    </CreatureContainer>
  );
}

export default Creature;
