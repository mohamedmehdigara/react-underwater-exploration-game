// UnderwaterWorld.js
import React from 'react';
import { UnderwaterWorldContainer, Reef, Plant, TerrainFeature } from './Styled';

function UnderwaterWorld() {
  return (
    <UnderwaterWorldContainer>
      {/* Render reefs */}
      <Reef />
      
      {/* Render plants */}
      <Plant type="seaweed" />
      <Plant type="coral" />

      {/* Render terrain features */}
      <TerrainFeature type="cave" />
      <TerrainFeature type="rock" />
    </UnderwaterWorldContainer>
  );
}

export default UnderwaterWorld;
