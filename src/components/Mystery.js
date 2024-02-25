// Mystery.js
import React, { useState } from 'react';
import { MysteryContainer, MysteryTitle, MysteryDescription, MysteryButton } from './Styled';

function Mystery() {
  const [revealed, setRevealed] = useState(false);

  function handleReveal() {
    setRevealed(true);
  }

  return (
    <MysteryContainer>
      {/* Render underwater mystery */}
      <MysteryTitle>The Sunken Ship Mystery</MysteryTitle>
      <MysteryDescription>
        Explore the depths and uncover the secrets of the sunken ship. Beware of hidden dangers
        lurking in the dark abyss.
      </MysteryDescription>
      {!revealed && <MysteryButton onClick={handleReveal}>Reveal Clue</MysteryButton>}
      {revealed && (
        <div>
          <p>Clue: The shipwreck is located near the coral reef.</p>
          {/* Add more clues or interactive elements */}
        </div>
      )}
    </MysteryContainer>
  );
}

export default Mystery;
