import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import DietList from "./components/DietList";
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
        <Route path="/diet-list" element={<DietList />} />
      </Routes>
    </div>
  );
}

export default App;
