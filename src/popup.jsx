import React from "react";
import { createRoot } from "react-dom/client";

function Popup(){
  return(
    <div>
      <h1>Hello From Extension</h1>
      <p>
        Checking for change
      </p>
    </div>
  )
};

const root = createRoot(document.getElementById("root"));
root.render(<Popup/>);