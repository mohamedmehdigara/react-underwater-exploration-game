import React, { useState } from 'react';

function SettingsMenu({ isOpen, onClose }) {
  const [graphicsQuality, setGraphicsQuality] = useState('high');
  const [controlScheme, setControlScheme] = useState('keyboard');

  const handleGraphicsQualityChange = (value) => {
    setGraphicsQuality(value);
    // Logic to apply graphics quality changes
  };

  const handleControlSchemeChange = (value) => {
    setControlScheme(value);
    // Logic to apply control scheme changes
  };

  return (
    <div className={`settings-menu ${isOpen ? 'open' : ''}`}>
      <h2>Settings</h2>
      <label>
        Graphics Quality:
        <select value={graphicsQuality} onChange={(e) => handleGraphicsQualityChange(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Control Scheme:
        <select value={controlScheme} onChange={(e) => handleControlSchemeChange(e.target.value)}>
          <option value="keyboard">Keyboard</option>
          <option value="gamepad">Gamepad</option>
          <option value="touch">Touch</option>
        </select>
      </label>
      {/* Add more settings options */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default SettingsMenu;
