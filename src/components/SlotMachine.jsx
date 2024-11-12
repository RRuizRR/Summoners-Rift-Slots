import React, { useState } from 'react';
import Reel from './Reel'; // Componente para cada imagen
import azul from "../img/azul.png";
import filo from "../img/filo.png";
import liandry from "../img/liandry.png";
import mejai from "../img/mejai.png";
import mseis from "../img/mseis.png";
import msiete from "../img/msiete.png";
import mCinco from "../img/mCinco.png";
import parte from "../img/parte.png";
import haste from "../img/haste.png";
import espejo from "../img/espejo.png";
import draven from "../img/draven.png";
import trinity from "../img/trinity.png";
import rojo from "../img/rojo.png";
import vayne from "../img/vayne.jpg";
import viego from "../img/viego.png";
import teemo from "../img/teemo.png";
import rabadon from "../img/rabadon.png";
import verde from "../img/verde.png";

const symbols = [
  azul, filo, liandry, mejai, mseis, msiete, mCinco, parte, haste, espejo,
  draven, trinity, rojo, vayne, viego, teemo, rabadon, verde
];

const SlotMachine = () => {
  const [credits, setCredits] = useState(10000);
  const [grid, setGrid] = useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
  const [message, setMessage] = useState('');

  // Función para generar una imagen aleatoria
  const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

  // Función para verificar combinaciones ganadoras
  const checkForWins = (newGrid) => {
    let totalWinnings = 0;

    // Comprobar filas
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        if (
          newGrid[row][col] === newGrid[row][col + 1] &&
          newGrid[row][col + 1] === newGrid[row][col + 2]
        ) {
          totalWinnings += 1000;
        }
      }
    }

    // Comprobar columnas
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 3; row++) {
        if (
          newGrid[row][col] === newGrid[row + 1][col] &&
          newGrid[row + 1][col] === newGrid[row + 2][col]
        ) {
          totalWinnings += 1000;
        }
      }
    }

    return totalWinnings;
  };

  // Función de girar
  const handleSpin = () => {
    if (credits < 750) {
      setMessage("No tienes suficientes créditos.");
      return;
    }

    // Resta créditos
    setCredits(credits - 750);

    // Genera un nuevo tablero de símbolos aleatorios
    const newGrid = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => getRandomSymbol())
    );
    setGrid(newGrid);

    // Verifica combinaciones ganadoras
    const winnings = checkForWins(newGrid);
    setCredits(credits + winnings);
    setMessage(winnings > 0 ? `¡Ganaste ${winnings} créditos!` : "Sin ganancia.");
  };
  
  return (
    <div style={{ textAlign: 'center', padding: '10xp' }}>
     <div style={{marginBottom:'12vh',marginRight:'33vh',padding:'0'}} >
     <p style={{ }}>{credits}</p>
     </div>
      {/* Tablero de slots 5x5 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 18vh)', gap: '1vh', marginTop: '9vh', marginLeft:'85vh'}}>
        {grid.map((row, rowIndex) =>
          row.map((symbol, colIndex) => (
            <Reel key={`${rowIndex}-${colIndex}`} symbol={symbol} />
          ))
        )}
     
      <button onClick={handleSpin} style={{ backgroundColor: "transparent",marginTop:'5vh',marginBottom:'20vh',marginLeft:'13vh',borderRadius: '50%',width:'30mm',height: '30mm'}} disabled={credits < 750&&credits-750}>
      </button>
      </div>
    </div>
  );
};

export default SlotMachine;
