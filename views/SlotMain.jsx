// SlotMain.js
import React from 'react';
import SlotMachine from '../src/components/SlotMachine'; // Ajusta la ruta según tu estructura de carpetas


export function SlotMain() {

  return (
   
    <div>
      <div>
      <SlotMachine />
      </div>
      <div style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('src/img/slot_base.png')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,}}>

      </div>
    </div>

    
  );
}
