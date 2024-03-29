// styled.js
import styled, {keyframes} from 'styled-components';



// Apply animation to the CreatureImage component
export const swimAnimation = keyframes`
0% {
  transform: translateX(-50%);
}
50% {
  transform: translateX(50%);
}
100% {
  transform: translateX(-50%);
}
`;

// Apply animation to the CreatureImage component
export const CreatureImage = styled.svg`
animation: ${swimAnimation} 5s ease-in-out infinite; // Adjust duration and timing function as needed
`;


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



export const CreatureContainer = styled.div`
  margin: 10px;
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

// Styled.js

const sparkleAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-50%); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(0); }
`;

export const TreasureChestContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ChestIcon = styled.span`
  font-size: 24px;
`;

export const ChestText = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const ChestParticles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #ffd700;
    border-radius: 50%;
    animation: ${sparkleAnimation} 0.5s ease-in-out infinite;
  }

  &::before {
    left: -10px;
  }

  &::after {
    left: 10px;
  }
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

export const QuestContainer = styled.div`
  margin-bottom: 20px;
`;

export const QuestTitle = styled.h3`
  color: #333;
  font-size: 20px;
`;

export const QuestDescription = styled.p`
  color: #666;
  font-size: 16px;
`;

export const QuestStatus = styled.p`
  color: ${({ status }) => (status === 'completed' ? 'green' : status === 'active' ? 'blue' : 'black')};
  font-weight: bold;
`;

export const QuestReward = styled.p`
  color: #333;
  font-weight: bold;
`;

export const RuinsContainer = styled.div`
  border: 2px solid #795548; /* Example border color */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const RuinsSVG = styled.svg`
  width: 100%;
  max-width: 300px; /* Adjust maximum width of the SVG */
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;

export const RuinsText = styled.p`
  margin-top: 10px;
  color: #333; /* Example text color */
`;

export const InfoText = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;

export const ScoreDisplay = styled.p`
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e0e0e0;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }

  button {
    background-color: #82b1ff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #6a89cc;
    }
  }
`;

export const PointOfInterest = styled.circle`
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2); /* Scale up on hover */
  }
`;

export const MysteryButton = styled.button`
  background-color: #82b1ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #6a89cc;
  }
`;

export const ObstacleInfo = styled.div`
  flex-grow: 1;
`;

export const ObstacleButton = styled.button`
  background-color: #82b1ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #6a89cc;
  }
`;

// Styled.js



// Progress bar component
export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  margin-top: 5px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ percent }) => percent}%; /* Adjust the width based on the percentage */
    background-color: ${({ color }) => color}; /* Dynamically set the background color */
    border-radius: 5px;
  }
`;


export const StatIcon = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

// Status bar component
export const StatusBar = styled.div`
  display: flex;
  align-items: center;
`;


export const RuinsTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const CaveContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CaveTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CaveDescription = styled.p`
  color: #333;
  font-size: 16px;
`;

export const CaveSVG = styled.svg`
  width: 100%;
  height: auto;
  /* Add any additional styles for the SVG here */
`;

export const FloraContainer = styled.div`
  margin: 20px;
`;

export const FloraTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FloraSVG = styled.svg`
  /* Define styles for the SVG */
`;
export const FloraDescription = styled.p`
  color: #333;
  font-size: 16px;
`;


export const WildlifeContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WildlifeTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const WildlifeDescription = styled.p`
  color: #666;
  font-size: 16px;
`;

export const WildlifeSVG = styled.svg`
  width: 100px; /* Adjust the size of the SVG */
  height: 100px;
`;

export const ItemStatus = styled.span`
  color: ${({ used }) => (used ? 'green' : 'red')};
  margin-left: 10px;
  font-size: 14px;
`;

// Define animation keyframes for creature movement


