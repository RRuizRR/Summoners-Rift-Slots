import React, { useEffect, useRef } from 'react';

const SlotMaquina = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    

    ctx.fillRect(0, 0, canvas.width, canvas.height);

 

  }, []);

  return (
    <div className="row justify-content-center mb-3">
      <div className="col col-auto">
        <canvas id="slot" ref={canvasRef} width="440" height="240"></canvas>
      </div>
    </div>
  );
};

export default SlotMaquina;
