import React, { useState } from 'react';

const Controles = () => {
  const [credits, setCredits] = useState(10);
  const [bet, setBet] = useState(1);
  const [win, setWin] = useState(0);
  const [autoMode, setAutoMode] = useState(false);

  const handleSpin = () => {
    console.log('Spin button clicked!');
  
  };

  const handleAutoToggle = () => {
    setAutoMode(!autoMode);
  };

  const handleCheckout = () => {
    console.log('Checkout clicked');
  };

  return (
    <>
      <div className="row justify-content-center mb-3">
        <div className="col col-auto">
          <div className="input-group mb-3 w-75 m-auto">
            <div className="input-group-prepend">
              <span className="input-group-text">Current WIN</span>
            </div>
            <input type="text" className="form-control w-auto" value={win} readOnly />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col col-auto">
          <button className="btn btn-danger px-5" onClick={handleSpin}>
            <i className="fas fa-sync-alt"></i> SPIN
          </button>
          <button className="btn btn-secondary px-5" onClick={handleAutoToggle}>
            <i className="fab fa-android"></i> AUTO ({autoMode ? 'ON' : 'OFF'})
          </button>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col col-auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Credits</span>
            </div>
            <input
              className="form-control"
              type="number"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              min="1"
              max="5000"
            />
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-dollar-sign green"></i></span>
            </div>
          </div>
        </div>
        <div className="col col-auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">BETx</span>
            </div>
            <input
              className="form-control"
              type="number"
              value={bet}
              onChange={(e) => setBet(e.target.value)}
              min="1"
              max="3"
            />
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-coins gold"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col col-auto">
          <button className="btn btn-warning w-auto" onClick={handleCheckout}>
            <i className="fas fa-money-bill-alt"></i> CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Controles;
