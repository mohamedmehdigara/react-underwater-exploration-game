// PlayerStatus.js
import React from 'react';
import { PlayerStatusContainer, StatItem } from './Styled';

function PlayerStatus({ health, oxygenLevel, score }) {
  return (
    <PlayerStatusContainer>
      <StatItem>Health: {health}</StatItem>
      <StatItem>Oxygen Level: {oxygenLevel}</StatItem>
      <StatItem>Score: {score}</StatItem>
    </PlayerStatusContainer>
  );
}

export default PlayerStatus;
