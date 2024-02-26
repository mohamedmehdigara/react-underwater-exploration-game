import React, { useState } from 'react';
import { MysteryContainer, MysteryTitle, MysteryDescription, MysteryButton } from './Styled';

function Mystery() {
  const [revealed, setRevealed] = useState(false);

  // Define clues as an array of objects
  const [clues, setClues] = useState([
    { id: 1, text: 'The shipwreck is located near the coral reef.' },
    { id: 2, text: 'Look for a key hidden among the seaweed.' },
    // Add more clues as needed
  ]);

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
          {/* Render all revealed clues */}
          {clues.map((clue) => (
            <p key={clue.id}>Clue: {clue.text}</p>
          ))}
          {/* Add more clues or interactive elements */}
        </div>
      )}
    </MysteryContainer>
  );
}

export default Mystery;
