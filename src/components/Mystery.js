// Mystery.js
import React from 'react';
import { MysteryContainer, MysteryTitle, MysteryDescription } from './Styled';

function Mystery() {
  return (
    <MysteryContainer>
      {/* Render underwater mystery */}
      <MysteryTitle>The Sunken Ship Mystery</MysteryTitle>
      <MysteryDescription>
        Explore the depths and uncover the secrets of the sunken ship. Beware of hidden dangers
        lurking in the dark abyss.
      </MysteryDescription>
    </MysteryContainer>
  );
}

export default Mystery;
