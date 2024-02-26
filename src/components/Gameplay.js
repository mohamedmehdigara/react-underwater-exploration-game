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

  function handleTreasureCollection() {
    // Logic to handle treasure collection
    setScore(score + 50); // Increase score when collecting treasure
  }

  function handleMysterySolved() {
    // Logic to handle mystery solved
    setScore(score + 100); // Increase score when solving a mystery
  }

  return (
    <GameplayContainer>
      {/* Render underwater world, creatures, mysteries, etc. */}
      <Creature onClick={handleCreatureInteraction} />
      <Mystery onSolve={handleMysterySolved} />
      {/* Render obstacles */}
      <Obstacle />
      {/* Render treasures */}
      <Treasure onClick={handleTreasureCollection} />
      {/* Render quests */}
      <Quest />
      {/* Display score */}
      <ScoreDisplay>Score: {score}</ScoreDisplay>
    </GameplayContainer>
  );
}

export default Gameplay;
