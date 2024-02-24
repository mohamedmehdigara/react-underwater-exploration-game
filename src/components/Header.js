// Header.js
import React from 'react';
import { HeaderContainer, Title, Navbar, NavItem } from './Styled';

function Header() {
  return (
    <HeaderContainer>
      <Title>Underwater Exploration Adventure Game</Title>
      <Navbar>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#controls">Controls</NavItem>
        <NavItem href="#settings">Settings</NavItem>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
