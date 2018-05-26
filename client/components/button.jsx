import React from "react";

const Button = props => (
  <div>
    <div>{props.count}</div>
    <button onClick={props.increaseCount}>Counter++</button>
  </div>
);

export default Button;
