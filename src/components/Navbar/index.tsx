import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span>
        <Link to="/">
          <img src="./assets/header.png" alt="logo" className="nav-img"/>
        </Link>
      </span>

      <span>
        <ul>
          <li>
            <Link to="/whatisBMI"> <img src="./assets/question.png" alt="question" />BMI Nedir? </Link>
          </li>
          <li>
            <Link to="/"> <img src="./assets/calculator.png" alt="calculate" />BMI Hesapla</Link>
          </li>

          <li>
            <Link to="/diet-list"><img src="./assets/checklist.png" alt="list" />Diyet Listesi </Link>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Navbar;
