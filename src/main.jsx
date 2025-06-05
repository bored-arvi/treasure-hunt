/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <HashRouter>
      <App />
    </HashRouter>

);*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AppRoutes />
  </Router>
);

