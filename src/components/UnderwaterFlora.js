import React from 'react';
import { FloraContainer, FloraSVG, FloraTitle, FloraDescription } from './Styled';

function UnderwaterFlora({ title, description }) {
  return (
    <FloraContainer>
      <FloraSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        {/* Add SVG paths to draw the underwater flora */}
        {/* Example: <path d="M50 50 L100 150 L150 50 Z" fill="#00FF00" /> */}
      </FloraSVG>
      <FloraTitle>{title}</FloraTitle>
      <FloraDescription>{description}</FloraDescription>
    </FloraContainer>
  );
}

export default UnderwaterFlora;
