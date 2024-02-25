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

function App() {
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
     <TreasureChest/>

     </div>
  );
}

export default App;
