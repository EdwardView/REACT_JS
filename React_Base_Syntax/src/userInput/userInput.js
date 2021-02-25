import React from "react";

const userInput = (props) => {
  const inputStyle = {
    margin : "20px",
    border: "2px solid black",
  };
  return <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />;
};

export default userInput;
