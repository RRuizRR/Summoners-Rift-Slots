import React, { useState, useEffect } from 'react';
import Reel from "../components/Reel";

function Slot({ spinning, numRows = 5, numReels = 5 }) {
  const [symbols, setSymbols] = useState(
    Array.from({ length: numRows }, () => Array.from({ length: numReels }))
  );
  const [totalWinnings, setTotalWinnings] = useState(0); 

  useEffect(() => {
    if (!spinning) {
      // Aquí puedes agregar lógica para manejar las animaciones o actualizaciones
    }
  }, [spinning, symbols]);

  const fetchSymbols = () => {
    const newSymbols = Array.from({ length: numRows }, () => 
      Array.from({ length: numReels }, () => "../img/rojo.png")  
    );
    setSymbols(newSymbols);
  };

  return (
    <div className="slot-machine" style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
      <div className="winnings" style={{ marginBottom: '20px' }}>
        <h2>Total de Ganancias: {totalWinnings}</h2>
      </div>

      {/* Renderiza las filas de reels */}
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div 
          className="row" 
          key={rowIndex} 
          style={{ 
            display: 'flex', 
            gap: '70px', // Espacio entre los reels de la fila
            justifyContent: 'center', // Centra los reels en la fila
          }}
        >
          {Array.from({ length: numReels }).map((_, reelIndex) => (
            <Reel symbol={symbols[rowIndex][reelIndex]} spinning={spinning} key={reelIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Slot;
