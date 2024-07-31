import React, { useState } from "react";
import { colorNames } from "./ColorNames";
//import ColorButtons from "./ColorButtons";
import "./ButtonColor.css";

function ColorPicker() {
  const [color, setColor] = useState("Aquamarine");

  const divStyle = { backgroundColor: color };

  //Handler for change color
  const handleClick = (newColor) => {
    setColor(newColor);
  };

  //Creating button elements using map
  const colorButtons = colorNames.map((colorName) => (
    <button
      className="btn"
      onClick={() => handleClick(colorName)}
      key={colorName}
    >
      {colorName}
    </button>
  ));

  return (
    <div className="bg" style={divStyle}>
      <div className="content">
        <p>Selected color: {color}</p>
        <div className="btn-container">{colorButtons}</div>
      </div>
    </div>
  );
}

export default ColorPicker;
