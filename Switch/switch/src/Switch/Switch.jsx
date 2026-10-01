import React from "react";

const Switch = ({isOn, label ,  onToggle=()=>{}}) => {
  return (
    <div className="switch">
        <label>
         <input type="checkbox" checked={isOn} onChange={onToggle} />
         <span className="slider"></span>
         <span>{label}</span>
     </label>
     
     
    </div>
  );
};

export default Switch;
