import React from "react";
import ReactDOM from "react-dom/client";
// import dog from "./public/images/dog3.jpg";


const Title =() =>(
    <h1 className="heading">Namaste React👌</h1>
);

const title =(
    <h1 className="heading">Namaste React👌</h1>
);

const number = 1000;

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        {title}
        <h1 className="head">Namaste React Functional Component😊{number}</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
