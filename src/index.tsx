import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import AppGlobalTheme from "./indexStyles";

const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
    <React.StrictMode>
        <AppGlobalTheme />
        <App/>
    </React.StrictMode>
)