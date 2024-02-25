// Map.js
import React from 'react';
import { MapContainer, MapSvg, PointOfInterest } from './Styled';

function Map() {
  return (
    <MapContainer>
      <MapSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
        {/* Background representing water */}
        <rect x="0" y="0" width="500" height="300" fill="#1e90ff" />

        {/* Central point of interest */}
        <PointOfInterest cx="250" cy="150" r="50" fill="#f0f0f0" />

        {/* Additional points of interest */}
        <PointOfInterest cx="100" cy="200" r="20" fill="#ff7f50" />
        <PointOfInterest cx="400" cy="100" r="30" fill="#32cd32" />
        {/* Add more PointOfInterest elements to represent other landmarks */}
      </MapSvg>
    </MapContainer>
  );
}

export default Map;
