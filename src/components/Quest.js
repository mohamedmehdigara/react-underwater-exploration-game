// Quest.js
import React from 'react';
import { QuestContainer, QuestTitle, QuestDescription, QuestStatus, QuestReward } from './Styled';

function Quest({ title, description, status, reward }) {
  return (
    <QuestContainer>
      <QuestTitle>{title}</QuestTitle>
      <QuestDescription>{description}</QuestDescription>
      <QuestStatus>Status: {status}</QuestStatus>
      <QuestReward>Reward: {reward}</QuestReward>
    </QuestContainer>
  );
}

export default Quest;
