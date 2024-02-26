import React from 'react';
import { MapContainer, MapSvg, PointOfInterest } from './Styled';

function Map() {
  // Define points of interest data
  const pointsOfInterest = [
    { id: 1, cx: 250, cy: 150, r: 50, fill: '#f0f0f0' },
    { id: 2, cx: 100, cy: 200, r: 20, fill: '#ff7f50' },
    { id: 3, cx: 400, cy: 100, r: 30, fill: '#32cd32' },
    // Add more points of interest here
  ];

  // Function to handle click on a point of interest
  const handlePointOfInterestClick = (id) => {
    console.log(`Point of Interest ${id} clicked`);
    // Add logic to handle click event, such as displaying details or navigating
  };

  return (
    <MapContainer>
      <MapSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
        {/* Background representing water */}
        <rect x="0" y="0" width="500" height="300" fill="#1e90ff" />

        {/* Render points of interest */}
        {pointsOfInterest.map(({ id, cx, cy, r, fill }) => (
          <PointOfInterest
            key={id}
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
            onClick={() => handlePointOfInterestClick(id)}
          />
        ))}
      </MapSvg>
    </MapContainer>
  );
}

export default Map;
