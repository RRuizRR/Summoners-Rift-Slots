import React, { useState, useEffect } from 'react';
import Reel from "../components/Reel";

function Slot({ spinning, numRows = 5, numReels = 5 }) {
  const [symbols, setSymbols] = useState(
    Array.from({ length: numRows }, () => Array.from({ length: numReels }))
  );
  const [totalWinnings, setTotalWinnings] = useState(0); 


  useEffect(() => {
    if (!spinning) {
      
    
    }
  }, [spinning, symbols]);


  const fetchSymbols = () => {
    const newSymbols = Array.from({ length: numRows }, () => 
      Array.from({ length: numReels }, () => "../img/rojo.png")  
    );
    setSymbols(newSymbols);
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
