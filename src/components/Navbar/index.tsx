import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span>
        <img src="./assets/header.png" alt="logo" />
      </span>

      <span>
        <ul>
          <li>
            <Link to="/whatisBMI">BMI Nedir</Link>
          </li>
          <li>
            <Link to="/">BMI Hesapla</Link>
          </li>

          <li>
            <Link to="/calculate-data">Verilerim</Link>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Navbar;
