// Quest.js
import React from 'react';
import { QuestContainer, QuestTitle, QuestDescription } from './Styled';

function Quest({ title, description }) {
  return (
    <QuestContainer>
      <QuestTitle>{title}</QuestTitle>
      <QuestDescription>{description}</QuestDescription>
    </QuestContainer>
  );
}

export default Quest;
