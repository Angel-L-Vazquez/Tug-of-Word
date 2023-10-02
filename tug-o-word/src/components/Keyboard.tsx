import React from "react";
import "./index.css";

interface KeyboardProps {}

/* explanation for angel: 
This is a base idea on how to create a component. The props of a component are the arguments that you pass into the component.


*/
export const Keyboard: React.FC<KeyboardProps> = () => {
  return (
    <div className="keyboard">
      <p> Hello, world! </p>
    </div>
  );
};

export default Keyboard;
