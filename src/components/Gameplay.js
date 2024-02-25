// Gameplay.js
import React, { useState } from 'react';
import Creature from './Creature';
import Mystery from './Mystery';
import Obstacle from './Obstacle';
import Treasure from './TreasureChest';
import Quest from './Quest';
import { GameplayContainer, ScoreDisplay } from './Styled';

function Gameplay() {
  const [score, setScore] = useState(0);

  function handleCreatureInteraction() {
    // Logic to handle interaction with creatures
    setScore(score + 10); // Increase score when interacting with creatures
  }

  return (
    <GameplayContainer>
      {/* Render underwater world, creatures, mysteries, etc. */}
      <Creature onClick={handleCreatureInteraction} />
      <Mystery />
      {/* Render obstacles */}
      <Obstacle />
      {/* Render treasures */}
      <Treasure />
      {/* Render quests */}
      <Quest />
      {/* Display score */}
      <ScoreDisplay>Score: {score}</ScoreDisplay>
    </GameplayContainer>
  );
}

export default Gameplay;
