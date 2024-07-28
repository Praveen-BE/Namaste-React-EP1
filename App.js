import React from "react";
import ReactDOM from "react-dom/client";
// import dog from "./public/images/dog3.jpg";


const Title = ()=> (
    <h1 className="heading">Namaste React👌</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="head">Namaste React Functional Component😊</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
