import React, { useState, useEffect } from 'react';
import Creature from './Creature';
import Mystery from './Mystery';
import Obstacle from './Obstacle';
import Treasure from './TreasureChest';
import Quest from './Quest';
import { GameplayContainer, ScoreDisplay } from './Styled';
import { generateRandomCreature } from './CreatureGenerator';

function Gameplay() {
  const [score, setScore] = useState(0);
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    addRandomCreature(); // Add initial random creature when component mounts
  }, []); // Empty dependency array ensures it only runs once when component mounts

  function handleCreatureInteraction() {
    // Logic to handle interaction with creatures
    setScore(prevScore => prevScore + 10); // Increase score when interacting with creatures
  }

  function handleTreasureCollection() {
    // Logic to handle treasure collection
    setScore(prevScore => prevScore + 50); // Increase score when collecting treasure
  }

  function handleMysterySolved() {
    // Logic to handle mystery solved
    setScore(prevScore => prevScore + 100); // Increase score when solving a mystery
  }

  function addRandomCreature() {
    const randomCreature = generateRandomCreature();
    setCreatures(prevCreatures => [...prevCreatures, randomCreature]);
  }

  return (
    <GameplayContainer>
      {/* Render underwater world, creatures, mysteries, etc. */}
      {creatures.map((creature, index) => (
        <Creature key={index} type={creature.type} color={creature.color} size={creature.size} onClick={handleCreatureInteraction} />
      ))}
      <Mystery onSolve={handleMysterySolved} />
      <Obstacle />
      <Treasure onClick={handleTreasureCollection} />
      <Quest />
      <ScoreDisplay>Score: {score}</ScoreDisplay>
    </GameplayContainer>
  );
}

export default Gameplay;
