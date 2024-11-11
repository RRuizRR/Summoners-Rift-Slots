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
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('src/img/slot_base.png')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      {/*Contenedor de la máquina tragamonedas*/}
      <div
        className="slot-machine"
        style={{
          display: 'flex',
          width: '70vw',
          height: '105vh',
          position: 'absolute',
          left: '37vw',
          top: '17vh',
          transform: 'scale(0.7)',
          transformOrigin: 'top left',
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

