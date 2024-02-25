// Map.js
import React from 'react';
import { MapContainer, MapSvg } from './Styled';

function Map() {
  return (
    <MapContainer>
      <MapSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
        {/* Add SVG paths to create the underwater world */}
        <rect x="0" y="0" width="500" height="300" fill="#1e90ff" /> {/* Blue background representing water */}
        <circle cx="250" cy="150" r="50" fill="#f0f0f0" /> {/* Central point of interest */}
        {/* Add more SVG elements to represent other points of interest, landmarks, etc. */}
      </MapSvg>
    </MapContainer>
  );
}

export default Map;
