import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let name = "Tung Phich";
let e = React.createElement(
  "h1",
  {
    style: {
      textAlign: "center",
    },
  },
  name
);
root.render(e);
reportWebVitals();
