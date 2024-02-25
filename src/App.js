// App.js
import React from 'react';
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import Footer from './components/Footer';
import { Container } from './components/Styled';
import Map from './components/Map';
import Obstacle from './components/Obstacle';
import PlayerStatus from './components/PlayerStatus';

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
     </div>
  );
}

export default App;
