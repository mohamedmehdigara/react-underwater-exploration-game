import React from 'react';
import { CreatureContainer, CreatureImage, Eye, Fin } from './Styled';

function Creature({ type, color, size, onClick }) {
  return (
    <CreatureContainer>
      <CreatureImage
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        onClick={onClick}
      >
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
        {type === 'shark' && (
          <>
            {/* Shark body */}
            <circle cx="50" cy="50" r={size * 2} fill={color} />
            {/* Shark fins */}
            <Fin x1="30" y1="50" x2="20" y2="60" />
            <Fin x1="70" y1="50" x2="80" y2="60" />
            <Fin x1="40" y1="70" x2="30" y2="80" />
            <Fin x1="60" y1="70" x2="70" y2="80" />
            {/* Shark teeth */}
            <circle cx="50" cy="70" r="2" fill="#fff" />
            <circle cx="45" cy="70" r="2" fill="#fff" />
            <circle cx="55" cy="70" r="2" fill="#fff" />
            <circle cx="40" cy="55" r="2" fill="#fff" />
            <circle cx="60" cy="55" r="2" fill="#fff" />
          </>
        )}
        {type === 'turtle' && (
          <>
            {/* Turtle body */}
            <circle cx="50" cy="50" r={size * 1.5} fill={color} />
            {/* Turtle shell */}
            <circle cx="50" cy="50" r={size * 2} fill="#6b8e23" />
            {/* Turtle head */}
            <circle cx="40" cy="50" r={size / 2} fill={color} />
            {/* Turtle legs */}
            <Fin x1="35" y1="55" x2="30" y2="60" />
            <Fin x1="65" y1="55" x2="70" y2="60" />
            <Fin x1="35" y1="45" x2="30" y2="40" />
            <Fin x1="65" y1="45" x2="70" y2="40" />
          </>
        )}
        {type === 'dolphin' && (
          <>
            {/* Dolphin body */}
            <circle cx="50" cy="50" r={size * 1.5} fill={color} />
            {/* Dolphin fins */}
            <Fin x1="40" y1="50" x2="30" y2="60" />
            <Fin x1="60" y1="50" x2="70" y2="60" />
            {/* Dolphin tail */}
            <Fin x1="30" y1="55" x2="20" y2="50" />
            <Fin x1="70" y1="55" x2="80" y2="50" />
          </>
        )}
        {type === 'seahorse' && (
          <>
            {/* Seahorse body */}
            <circle cx="50" cy="50" r={size / 2} fill={color} />
            {/* Seahorse tail */}
            <Fin x1="50" y1="50" x2="60" y2="60" />
            <Fin x1="50" y1="50" x2="60" y2="40" />
            {/* Seahorse snout */}
            <circle cx="55" cy="50" r="2" fill="#fff" />
            {/* Seahorse eye */}
            <Eye cx="45" cy="45" />
          </>
        )}
      </CreatureImage>
      {/* Label each sea animal */}
      <label>{type}</label>
    </CreatureContainer>
  );
}

export default Creature;
