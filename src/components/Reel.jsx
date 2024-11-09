import React, { useState, useEffect } from 'react';
import azul from "../img/azul.png";
import filo from "../img/filo.png";
import liandry from "../img/liandry.png";
import mejai from "../img/mejai.png";
import mseis from "../img/mseis.png";
import mCinco from "../img/mCinco.png";
import parte from "../img/parte.png";
import haste from "../img/haste.png";
import espejo from "../img/espejo.png";
import draven from "../img/draven.png";
import trinity from "../img/trinity.png";
import rojo from "../img/rojo.png";
import master from "../img/master.png";
import chal from "../img/chal.png";
import gm from "../img/gm.png";
import vayne from "../img/vayne.jpg";
import viego from "../img/viego.png";
import teemo from "../img/teemo.png";

const symbols = [
  azul,filo,liandry,mejai,mseis,mCinco,parte,haste,espejo,draven,trinity,rojo,master,chal,gm,vayne,viego,teemo
];

function Reel({ spinning }) {
  const [currentSymbol, setCurrentSymbol] = useState(symbols[0]);

  useEffect(() => {
    let interval;
    if (spinning) {
      interval = setInterval(() => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        setCurrentSymbol(randomSymbol);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [spinning]);

  return (
    <div className="reel" style={{ width: '100px', height: '100px', alignItems: 'center'  }}>
      <img src={currentSymbol} alt="slot symbol" style={{ width: '100px', height: '100px',  }} />
    </div>
  );
}

export default Reel;
