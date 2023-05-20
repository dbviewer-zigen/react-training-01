import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Count, CountButtonArea } from "./components/Counter";
import { CountProvider } from "./components/CounterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <h4>step05_メモ化による再描画防止Context分割</h4>
    {/* <App /> */}
    <CountProvider>
      <Count />
      <CountButtonArea />
    </CountProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
