import React, { useState } from 'react';
import { ObstacleContainer, ObstacleInfo, ObstacleButton } from './Styled';

function Obstacle() {
  const [overcome, setOvercome] = useState(false);

  function handleOvercome() {
    // Simulate asynchronous obstacle overcoming
    setTimeout(() => {
      // Logic to handle overcoming the obstacle
      setOvercome(true);
    }, 1000); // Simulate a delay for realism
  }

  return (
    <ObstacleContainer>
      {/* Render SVG obstacle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{ marginRight: '20px' }}
      >
        {/* Define SVG path for the obstacle */}
        <path d="M10,50 L90,50" stroke="#000" strokeWidth="5" />
      </svg>
      {!overcome ? (
        <ObstacleInfo>
          <p>Watch out for the underwater current!</p>
          <ObstacleButton onClick={handleOvercome}>Overcome Obstacle</ObstacleButton>
        </ObstacleInfo>
      ) : (
        <p>Obstacle overcome!</p>
      )}
    </ObstacleContainer>
  );
}

export default Obstacle;
