import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import CalculateData from "./components/CalculateData";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WhatIsBMI from "./components/WhatIsBMI";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatisBMI" element={<WhatIsBMI />} />
        <Route path="/calculate-data" element={<CalculateData />} />
      </Routes>
    </div>
  );
}

export default App;
