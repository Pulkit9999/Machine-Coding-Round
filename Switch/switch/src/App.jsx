import { useState } from "react";
import Switch from "./Switch/Switch";
import '../src/index.css';
function App() {
const [isOn , setIsOn] = useState(false);

const handleToggle = () =>{
  setIsOn(!isOn);
}
  return (
    <div className="main">
      <Switch label="Switch" isOn={isOn} onToggle={handleToggle} />
    </div>
  );
}

export default App;
