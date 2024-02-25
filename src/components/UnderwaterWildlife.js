import React from 'react';
import { WildlifeContainer, WildlifeTitle, WildlifeDescription, WildlifeSVG } from './Styled';

function UnderwaterWildlife({ title, description }) {
  return (
    <WildlifeContainer>
      <WildlifeTitle>{title}</WildlifeTitle>
      <WildlifeDescription>{description}</WildlifeDescription>
      {/* Render an SVG representing underwater wildlife */}
      <WildlifeSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {/* Add SVG paths and shapes here */}
        <circle cx="50" cy="50" r="40" fill="#00f" />
        {/* Add more SVG elements as needed */}
      </WildlifeSVG>
    </WildlifeContainer>
  );
}

export default UnderwaterWildlife;
