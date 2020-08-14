import React from "react";
import { render } from "react-dom";

const Hi = () => {
  // debugger; // show on sources the original code
  return <div>Hello React</div>;
};

render(<Hi />, document.getElementById("app"));
