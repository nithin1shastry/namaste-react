import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
  <h1 className="head" tabIndex="5">
    Namaste react using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <h1>Namaste React Func comp</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
