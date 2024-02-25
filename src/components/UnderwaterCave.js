import React from 'react';
import { CaveContainer, CaveTitle, CaveDescription, CaveSVG } from './Styled';

function UnderwaterCave({ title, description }) {
  return (
    <CaveContainer>
      <CaveTitle>{title}</CaveTitle>
      <CaveDescription>{description}</CaveDescription>
      <CaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        {/* Add SVG paths to draw the underwater cave */}
        <path d="M 10,50 Q 20,80 30,50 T 50,50 Z" fill="#795548" /> {/* Example cave entrance */}
        <circle cx="100" cy="100" r="40" fill="#B0BEC5" /> {/* Example cave interior */}
        {/* Add more SVG shapes to enhance the underwater cave */}
      </CaveSVG>
    </CaveContainer>
  );
}

export default UnderwaterCave;
