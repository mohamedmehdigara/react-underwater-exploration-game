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
  padding: 20px 0;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
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
  margin: 10px;
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
