import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am a child"),
    React.createElement("h2", {}, "I am a second child")
  ),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a child"),
    React.createElement("h2", {}, "I am a second child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
