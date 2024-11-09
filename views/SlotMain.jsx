import React, {useEffect, useState} from "react";
import Slot from "../src/components/Slots";
import {  useUser } from "../context/UserContext";
import { getUser } from "../api/userRequest";

export function SlotMain() {
    const [spinning, setSpinning] = useState(false);
    const {users, getUsers} = useUser()


  useEffect(() =>{
    getUsers();
    
  }, []);

  const handleSpin = () => {
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
    }, 2000);  
  };



  return (
    <div className="slot-machine" style={{
      display: 'flex',
      width: '100vw',  
      height: '100vh', 
           
      backgroundColor: 'red',
     
      
  }}>
      <Slot spinning={spinning} />
  
      <div className="buton" style={{
          backgroundColor: '',
          display: 'flex',          
               
          marginBottom : '200px'       
      }}>
          <button onClick={handleSpin} style={{backgroundColor: "black" }} disabled={spinning}>
              Spin
          </button>
      </div>
  </div>
  );
}

