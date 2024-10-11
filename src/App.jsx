import "./App.css";
import React, { useState } from 'react';
import Slot from "./components/Slots";

function App() {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
    }, 2000);  
  };

  return (
    <div className="slot-machine">
      <Slot spinning={spinning} />
      <button onClick={handleSpin} disabled={spinning}>Spin</button>
    </div>
  );
}

export default App;

