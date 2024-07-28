import React from "react";
import ReactDOM from "react-dom/client";
import dog from "./public/images/dog3.jpg";

const heading = React.createElement("h1",{className: "heading"}, "Hello React 🍌🙏😊😂🤣");
console.log(heading);
const jsxHeading = ([
<h1 className="head" tabIndex={1}>Hello JSX React ❤️</h1>,
<h2 className="heading">Hello Boy</h2>,
<img Src={dog} height="200x" width="200px"/>]
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);
