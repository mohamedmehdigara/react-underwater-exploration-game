import React, {useState} from 'react';
import { HeaderContainer, Title, Navbar, NavItem, NavLink } from './Styled';
import SettingsMenu from './SettingsMenu';

function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  return (
    <HeaderContainer>
      {/* Render logo with SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
      <Title>Underwater Exploration Adventure Game</Title>
      <Navbar>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#controls">Controls</NavLink>
        </NavItem>
        <NavItem>
          <button onClick={toggleSettings}>Settings</button>
        </NavItem>
        <NavItem>
          <NavLink href="#leaderboard">Leaderboard</NavLink>
        </NavItem>
        {/* Add more navigation options */}
      </Navbar>
      {showSettings && <SettingsMenu onClose={() => setShowSettings(false)} />}

    </HeaderContainer>
  );
}

export default Header;
