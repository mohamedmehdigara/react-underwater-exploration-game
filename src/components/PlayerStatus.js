import React from 'react';
import { PlayerStatusContainer, StatItem, StatIcon, StatusBar } from './Styled';
import { FaHeart, FaLungs, FaStar } from 'react-icons/fa';

function PlayerStatus({ health, oxygenLevel, score }) {
  // Calculate percentage values for health and oxygen levels
  const healthPercentage = (health / 100) * 100;
  const oxygenPercentage = (oxygenLevel / 100) * 100;

  return (
    <PlayerStatusContainer>
      {/* Display health status with an icon and a progress bar */}
      <StatItem>
        <StatIcon>
          <FaHeart />
        </StatIcon>
        Health:
        <StatusBar percentage={healthPercentage} color="#ff6347" />
        {/* Set color to red */}
      </StatItem>
      {/* Display oxygen level with an icon and a progress bar */}
      <StatItem>
        <StatIcon>
          <FaLungs />
        </StatIcon>
        Oxygen Level:
        <StatusBar percentage={oxygenPercentage} color="#00bfff" />
        {/* Set color to blue */}
      </StatItem>
      {/* Display score with an icon */}
      <StatItem>
        <StatIcon>
          <FaStar />
        </StatIcon>
        Score: {score}
      </StatItem>
    </PlayerStatusContainer>
  );
}

export default PlayerStatus;
