import "./App.css";
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import React, { useState } from 'react';
//context
import { User } from "../context/UserContext";


//Views
import {SlotMain} from "../views/SlotMain.jsx";
function App() {
  return (
      <BrowserRouter>
          <User>  
              <Routes>
                  <Route path="/slot" element={<SlotMain />} />  
              </Routes>
          </User>
      </BrowserRouter>
  );
}

export default App;
