What is React Element?
object
Create react-app without npx create-react-app?

What is JSX?
JSX is just a syntax.
================================================================================
Without JSX
const heading = React.createElement("h1", {id:"heading"}, "Namaste");

With JSX
const jsxHeading = <h1>Namaste</h1>;
================================================================================

JSX is html like syntax. Looks like html/xml
JSX is not HTML.
JSX eases our life with familiar syntax

What is parcel? What can it provide?

Diff between ^ and ~ in package?

What is npm?

Diff between package.json and package-lock.json?

Can you delete package-lock.json?

Why node_modules?

Is there only one package.json in your application?

Is JSX valid JS?
It is not valid JS as per say.
Yes/No
JS engine doesn't understand JSX, its not pure JS. JS understand ECMA Script.
If you write JSX in chrome console, it gives you error.

parcel is doing the job. Basically jsx code is transpiled and JS engine understands the code.

Parcel uses Babel to transpile

How to write image tag, anchor tag in jsx?

What is react component?

What is CDN?

What is component composition?
import React from "react";
import ReactDOM from "react-dom/client";

const Title = (

  <h1 className="head" tabIndex="5">
    Namaste react using JSX
  </h1>
);

const HeadingComponent = () => (

  <div id="container">
    <Title/>
    <h1>Namaste React Func comp</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

one can write react element inside react element

JSX takes care of cross side scripting

Why const?

======================================================
default export vs named export/import?
one file only one default export, but multiple named export/imports
while importing named exports use {}

can I use default export with named export?
https://stackoverflow.com/questions/40086681/named-export-and-default-export-in-the-same-file
