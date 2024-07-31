import React from "react";

function ColorButtons({ colors, onClick, key }) {
  return (
    <button className="btn" onClick={onClick} key={key}>
      {colors}
    </button>
  );
}
export default ColorButtons;
