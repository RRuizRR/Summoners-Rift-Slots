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
  const [credits, setCredits] = useState(20000);
  const [grid, setGrid] = useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
  const [message, setMessage] = useState('');

  // Función para generar una imagen aleatoria
  const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
  const winningCombinations = [
    // Aquí defines combinaciones ganadoras especiales
    ["azul", "filo", "liandry"], // Por ejemplo: combinación de "azul", "filo" y "liandry"
    ["vayne", "viego", "draven"], // Otra combinación especial
    ["filo", "espejo", "trinity","liandry","rabadon","mejai"],
    ["rojo", "azul", "verde"],
    ["filo", "rabadon", "espejo"],
    ["haste", "parte", "parte"],
    // Añade más combinaciones especiales según tus reglas
  ];
  
  const checkForWins = (newGrid) => {
    let totalWinnings = 0;
  
    // Recorre filas y columnas para buscar 3 o más símbolos iguales
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        // Verifica si hay 4 o 5 símbolos iguales en fila
        if (
          newGrid[row][col] === newGrid[row][col + 1] &&
          newGrid[row][col + 1] === newGrid[row][col + 2]
        ) {
          let count = 3;
          if (col + 3 < 5 && newGrid[row][col + 2] === newGrid[row][col + 3]) count = 4;
          if (col + 4 < 5 && newGrid[row][col + 3] === newGrid[row][col + 4]) count = 5;
  
          // Aplica un multiplicador según la cantidad de símbolos iguales
          totalWinnings += (count >= 4 ? 1000 * 4 : 1000); // Multiplica x4 si hay 4 o más símbolos iguales
        }
      }
    }
  
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 3; row++) {
        // Verifica si hay 4 o 5 símbolos iguales en columna
        if (
          newGrid[row][col] === newGrid[row + 1][col] &&
          newGrid[row + 1][col] === newGrid[row + 2][col]
        ) {
          let count = 3;
          if (row + 3 < 5 && newGrid[row + 2][col] === newGrid[row + 3][col]) count = 4;
          if (row + 4 < 5 && newGrid[row + 3][col] === newGrid[row + 4][col]) count = 5;
  
          // Aplica un multiplicador según la cantidad de símbolos iguales
          totalWinnings += (count >= 4 ? 1000 * 4 : 1000); // Multiplica x4 si hay 4 o más símbolos iguales
        }
      }
    }
  
    // Verifica las combinaciones especiales
    for (const combination of winningCombinations) {
      const foundCombo = combination.every(symbol =>
        newGrid.flat().includes(symbol)
      );
      if (foundCombo) totalWinnings += 5000; // Ajusta el valor de ganancia de combinaciones especiales
    }
  
    return totalWinnings;
  };
  // Función de girar
  const handleSpin = () => {
    if (credits < 750) {
      setMessage("No tienes suficientes créditos.");
      return;
    }
  
    // Resta inmediatamente los créditos al girar
    setCredits((prevCredits) => prevCredits - 750);
    // Genera un nuevo tablero de símbolos aleatorios
    const newGrid = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => getRandomSymbol())
    );
    setGrid(newGrid);
  
    // Verifica combinaciones ganadoras y suma créditos ganados
    const winnings = checkForWins(newGrid);
    setCredits((prevCredits) => prevCredits + winnings);
  
    // Muestra mensaje de ganancia o sin ganancia
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
     
      <button onClick={handleSpin} style={{ backgroundColor: "transparent",marginTop:'5vh',marginBottom:'20vh',marginLeft:'13vh',borderRadius: '50%',width:'31mm',height: '33mm',borderColor:'transparent'}} disabled={credits < 750&&credits-750}>
      </button>
      </div>
    </div>
  );
};

export default SlotMachine;
