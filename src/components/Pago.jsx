import React from 'react';

const Pago = () => {
  return (
    <div
      className="modal fade"
      id="payTable"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="payTableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="payTableTitle">Pay Table</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            
            <table className="table table-dark table-hover table-responsive">
              <thead>
                <tr>
                  <td>Reel1</td>
                  <td>Reel2</td>
                  <td>Reel3</td>
                  <td>TOP</td>
                  <td>MIDDLE</td>
                  <td>BOTTOM</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="./img/Cherry.png" width="40" alt="Cherry" /></td>
                  <td><img src="./img/Cherry.png" width="40" alt="Cherry" /></td>
                  <td><img src="./img/Cherry.png" width="40" alt="Cherry" /></td>
                  <td className="v-align">2000xBET</td>
                  <td className="v-align">1000xBET</td>
                  <td className="v-align">4000xBET</td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pago;
