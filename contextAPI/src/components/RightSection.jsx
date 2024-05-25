import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider";

export default function RightSection() {
  
    /*complete the missing code*/
    const { isOn, switchOn, switchOff } = useContext(BulbContext);

  return (
    <div className="right-section">
      <p>Right Section ( Bulb) {isOn ? "On" : "Off"} </p>
      <div className="light-bulb-container">
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        <button onClick={switchOn}>SWITCH ON </button>
       <button onClick={ switchOff } >SWITCH OFF </button>     
      </div>
    </div>
  );
}
