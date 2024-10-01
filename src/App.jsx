import React from 'react';
import SlotMaquina from './components/SlotMaquina';
import Controles from './components/Controles';
import Pago from './components/Pago';

const App = () => {
  return (
    <div className="container">
      <h2 className="text-center text-light my-3 gold">
        <i className="fab fa-phoenix-framework gold"></i> Slot Game
      </h2>
      <SlotMaquina />
      <Controles />
      <Pago />
    </div>
  );
};

export default App;
