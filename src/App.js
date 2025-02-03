import React from 'react';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import Phantom from './components/Phantom';
import Home from './components/Home';
import Slots from './components/Slots';
import Party from './components/Party';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Timer />
      <Home />
      <Slots />
      <Party />
      <Header />
      <Phantom />
      <Footer />
    </div>
  );
}

export default App;