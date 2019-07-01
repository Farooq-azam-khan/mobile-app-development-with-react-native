import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
function App(props) {
    return (
        <div className="App">
            <h1>{props.count}</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
let count = 0;
setInterval(() => ReactDOM.render(<App count={count++} />, rootElement), 1000);
