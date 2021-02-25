import React from "react";

import "./userOutputStyle.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName : {props.userName}</p>
      <p>It will Overwritten!!</p>
      <button onClick={() => {props.changed("JMI")}}>Switchs</button>
    </div>
  );
};

export default userOutput;
