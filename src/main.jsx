import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import AboutUs from "./AbousUs.jsx";

import './index.css'; // Asegúrate de que estás importando tu archivo CSS principal

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
