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

export const MapContainer = styled.div`
  margin: 20px;
`;

export const MapSvg = styled.svg`
  width: 100%; /* Ensure the SVG image fills its container */
  height: auto;
`;

export const ObstacleContainer = styled.div`
  margin: 20px;
`;

export const PlayerStatusContainer = styled.div`
  margin: 20px;
`;

export const StatItem = styled.div`
  margin-bottom: 5px;
`;


export const UnderwaterWorldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Reef = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  background-color: #D1C4E9; /* Example color for reef */
  border-radius: 50%;
`;

export const Plant = styled.div`
  position: absolute;
  ${({ type }) => {
    switch (type) {
      case 'seaweed':
        return `
          top: 80%;
          left: 20%;
          width: 20px;
          height: 80px;
          background-color: #2E7D32; /* Example color for seaweed */
        `;
      case 'coral':
        return `
          top: 70%;
          left: 80%;
          width: 60px;
          height: 40px;
          background-color: #FF5722; /* Example color for coral */
        `;
      default:
        return '';
    }
  }};
`;

export const TerrainFeature = styled.div`
  position: absolute;
  ${({ type }) => {
    switch (type) {
      case 'cave':
        return `
          top: 10%;
          left: 10%;
          width: 100px;
          height: 100px;
          background-color: #263238; /* Example color for cave */
          border-radius: 50%;
        `;
      case 'rock':
        return `
          top: 40%;
          left: 60%;
          width: 80px;
          height: 60px;
          background-color: #757575; /* Example color for rock */
          border-radius: 10px;
        `;
      default:
        return '';
    }
  }};
`;

export const TreasureChestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border: 2px solid #ffc107; /* Example border color */
  border-radius: 10px;
  background-color: #fff; /* Example background color */
  transition: transform 0.3s;
  user-select: none; /* Prevent text selection */
  
  &:hover {
    transform: scale(1.1); /* Enlarge the chest on hover */
  }
`;

export const ChestIcon = styled.div`
  font-size: 48px; /* Adjust icon size */
`;

export const ChestText = styled.p`
  margin-top: 5px;
`;

export const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid #03a9f4; /* Example border color */
  border-radius: 10px;
  background-color: #fff; /* Example background color */
`;

export const VehicleIcon = styled.div`
  font-size: 48px; /* Adjust icon size */
`;

export const VehicleName = styled.p`
  margin-top: 5px;
`;

export const InventoryContainer = styled.div`
  border: 2px solid #4caf50; /* Example border color */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 5px;
`;