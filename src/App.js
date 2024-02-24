// App.js
import React from 'react';
import Header from './components/Header';
import Gameplay from './components/Gameplay';
import Footer from './components/Footer';
import { Container } from './components/Styled';

function App() {
  return (
    <Container>
      <Header />
      <Gameplay />
      <Footer />
    </Container>
  );
}

export default App;
