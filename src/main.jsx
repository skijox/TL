import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/portfolio-3d">
    <App />
   </HashRouter>
</React.StrictMode>
);
