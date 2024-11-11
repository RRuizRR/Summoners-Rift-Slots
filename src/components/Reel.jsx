import React, { useState, useEffect } from 'react';
import './Reel.css';
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

const symbols = [
  azul, filo, liandry, mejai, msiete, mseis, mCinco, parte, haste, espejo, draven, trinity, rojo, vayne, viego, teemo
];

function Reel({ spinning }) {
  const [currentSymbols, setCurrentSymbols] = useState([symbols[0], symbols[1], symbols[2]]);

  useEffect(() => {
    let interval;
    if (spinning) {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        const nextSymbols = [
          symbols[randomIndex],
          symbols[(randomIndex + 1) % symbols.length],
          symbols[(randomIndex + 2) % symbols.length]
        ];
        setCurrentSymbols(nextSymbols);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [spinning]);

  return (
    <div className="reel" style={{ width: '106px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="reel-container">
        <div className="symbols">
          {currentSymbols.map((symbol, index) => (
            <img src={symbol} alt="slot symbol" className="symbol" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reel;