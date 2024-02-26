import React from 'react';
import { QuestContainer, QuestTitle, QuestDescription, QuestStatus, QuestReward, Button } from './Styled';

function Quest({ title, description, status, reward, onAccept, onDecline }) {
  return (
    <QuestContainer>
      <QuestTitle>{title}</QuestTitle>
      <QuestDescription>{description}</QuestDescription>
      <QuestStatus>Status: {status}</QuestStatus>
      <QuestReward>Reward: {reward}</QuestReward>
      <div>
        {/* Add buttons to accept or decline the quest */}
        <Button onClick={onAccept}>Accept</Button>
        <Button onClick={onDecline}>Decline</Button>
      </div>
    </QuestContainer>
  );
}

export default Quest;
