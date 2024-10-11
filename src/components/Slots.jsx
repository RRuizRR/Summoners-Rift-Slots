import React, { useState, useEffect } from 'react';
import Reel from "../components/Reel";

function Slot({ spinning, numRows = 5, numReels = 5 }) {
  const [symbols, setSymbols] = useState(
    Array.from({ length: numRows }, () => Array.from({ length: numReels }))
  );
  const [totalWinnings, setTotalWinnings] = useState(0); 


  useEffect(() => {
    if (!spinning) {
      
      calculateWinnings(symbols);
    }
  }, [spinning, symbols]);


  const fetchSymbols = () => {
    const newSymbols = Array.from({ length: numRows }, () => 
      Array.from({ length: numReels }, () => "../img/rojo.png")  
    );
    setSymbols(newSymbols);
  };


  const calculateWinnings = async (reels) => {
    try {
      const response = await fetch('http://localhost:3001/calculate-winnings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reels })
      });
      const data = await response.json();
      console.log('Ganancias obtenidas:', data.winnings);


      setTotalWinnings(prevWinnings => prevWinnings + data.winnings);
    } catch (error) {
      console.error('Error calculating winnings:', error);
    }
  };

  return (
    <div className="slot-machine">
      <div className="winnings">
        <h2>Total de Ganancias: {totalWinnings}</h2>
      </div>
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: numReels }).map((_, reelIndex) => (
            <Reel symbol={symbols[rowIndex][reelIndex]} spinning={spinning} key={reelIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Slot;
