import React, { useEffect, useState } from "react";
import Slot from "../src/components/Slots";
import { useUser } from "../context/UserContext";
import { getUser } from "../api/userRequest";

export function SlotMain() {
  const [spinning, setSpinning] = useState(false);
  const { users, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 2000);
  };

  return (
    <>
      {/* Fondo general */}
      <div
        style={{
          width: '100vw',  // Ocupa toda la pantalla
          height: '100vh', // Ocupa toda la pantalla
          backgroundImage: `url('src/img/slot_base.png')`,
          backgroundSize: '100% 100%', // Asegura que el fondo cubra toda la pantalla
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1, // Asegura que el fondo esté en el fondo y no interfiera con el contenido
        }}
      ></div>

      {/* Contenedor de la máquina tragamonedas, redimensionado usando transform */}
      <div
        className="slot-machine"
        style={{
          display: 'flex',
          width: '70vw', // Ancho original
          height: '105vh', // Alto original
          position: 'absolute',
          left: '37vw', // Mueve el contenedor a la derecha
          top: '16vh',  // Ajusta la distancia desde la parte superior
          transform: 'scale(0.7)', // Redimensiona el contenedor al 50% de su tamaño original
          transformOrigin: 'top left', // Redimensiona desde la esquina superior izquierda
        }}
      >
        <Slot spinning={spinning} />
        <div
          className="buton"
          style={{
            backgroundColor: '',
            display: 'flex',
            marginBottom: '200px',
          }}
        >
          <button onClick={handleSpin} style={{ backgroundColor: "black" }} disabled={spinning}>
            Spin
          </button>
        </div>
      </div>
    </>
  );
}

