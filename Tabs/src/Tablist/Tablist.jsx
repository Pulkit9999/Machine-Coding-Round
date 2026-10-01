import { useState } from "react";
import Button from "../Button/Button";

const TabList = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Component = tabs[selectedIndex].component;
  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      {tabs.map((item, index) => {
        return (
          <Button
            label={item.label}
            key={item.id}
            onClick={() => handleClick(index)}
          />
        );
      })}
      <Component />
      <div>
        hellooooo  guys 
  
      </div>
    </div>
  );
};

export default TabList;
