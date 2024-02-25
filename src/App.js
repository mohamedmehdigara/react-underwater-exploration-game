// App.js
import React from 'react';
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import Footer from './components/Footer';
import { Container } from './components/Styled';
import Map from './components/Map';
import Obstacle from './components/Obstacle';
import PlayerStatus from './components/PlayerStatus';
import UnderwaterWorld from './components/UnderwaterWorld';
import TreasureChest from './components/TreasureChest';
import UnderwaterVehicle from './components/UnderwaterVehicule';
import Inventory from './components/Inventory';
import Quest from './components/Quest';
import UnderwaterRuins from './components/UnderwaterRuins';
import UnderwaterCave from './components/UnderwaterCave';

function App() {
  const handleTreasureCollection = () => {
    console.log('Treasure collected!');
    // Add logic to handle treasure collection
  };
  return (
    <div>
    <Container>
      <Header />
      <Gameplay />
      <Footer />
    </Container>
     <Map />
     <Obstacle />
     <PlayerStatus health={100} oxygenLevel={80} score={500} />
     <UnderwaterWorld />
     <TreasureChest onClick={handleTreasureCollection} />
     <UnderwaterVehicle type="submarine" />
     <Inventory/>
     <Quest/>
     <UnderwaterRuins/>
     <UnderwaterCave/>

     </div>
  );
}

export default App;
