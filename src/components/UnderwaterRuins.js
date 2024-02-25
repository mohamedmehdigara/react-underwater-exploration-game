// UnderwaterRuins.js
import React from 'react';
import { RuinsContainer, RuinsSVG, RuinsText } from './Styled';

function UnderwaterRuins({ description }) {
  return (
    <RuinsContainer>
      <RuinsSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        {/* Add SVG paths to draw the underwater ruins */}
        <rect x="50" y="50" width="100" height="100" fill="#795548" />
        <circle cx="100" cy="100" r="40" fill="#B0BEC5" />
        {/* Add more SVG shapes to enhance the underwater ruins */}
      </RuinsSVG>
      <RuinsText>{description}</RuinsText>
    </RuinsContainer>
  );
}

export default UnderwaterRuins;
