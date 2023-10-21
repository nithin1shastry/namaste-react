// <div id="parent">
//   <div id="child">
//     <h1> I am a child</h1>
//   </div>
// </div>

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
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
