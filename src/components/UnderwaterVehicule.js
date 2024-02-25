// UnderwaterVehicle.js
import React from 'react';
import { VehicleContainer, VehicleIcon, VehicleName } from './Styled';

function UnderwaterVehicle({ type }) {
  return (
    <VehicleContainer>
      <VehicleIcon>
        {/* Render an icon or image representing the underwater vehicle */}
        {type === 'submarine' ? (
          <span role="img" aria-label="Submarine">🚤</span>
        ) : (
          <span role="img" aria-label="Diving Suit">🤿</span>
        )}
      </VehicleIcon>
      <VehicleName>
        {type === 'submarine' ? 'Submarine' : 'Diving Suit'}
      </VehicleName>
    </VehicleContainer>
  );
}

export default UnderwaterVehicle;
