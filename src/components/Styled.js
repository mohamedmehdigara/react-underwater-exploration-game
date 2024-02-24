// styled.js
import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const HeaderContainer = styled.header`
  background-color: #82b1ff;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 0;
`;

export const Navbar = styled.nav`
  display: flex;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e0e0e0;
  }
`;


export const GameplayContainer = styled.div`
  margin: 20px;
`;

const swimAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export const CreatureContainer = styled.div`
  margin: 10px;
`;

export const CreatureImage = styled.svg`
  width: 100px; /* Adjust the size of the creature */
  height: 100px;
  animation: ${swimAnimation} 2s infinite alternate; /* Add swim animation */
  cursor: pointer; /* Change cursor to pointer on hover */
`;

export const Eye = styled.circle`
  cx: ${({ cx }) => cx};
  cy: ${({ cy }) => cy};
  r: 5;
  fill: #fff;
`;

export const Fin = styled.line`
  x1: ${({ x1 }) => x1};
  y1: ${({ y1 }) => y1};
  x2: ${({ x2 }) => x2};
  y2: ${({ y2 }) => y2};
  stroke: #00f;
  stroke-width: 3;
`;


export const MysteryContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MysteryTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MysteryDescription = styled.p`
  color: #666;
  font-size: 16px;
`;


export const MysteryText = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #82b1ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6a89cc;
  }
`;


export const FooterContainer = styled.footer`
  background-color: #82b1ff;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControlButton = styled.button`
  background-color: #fff;
  color: #82b1ff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
