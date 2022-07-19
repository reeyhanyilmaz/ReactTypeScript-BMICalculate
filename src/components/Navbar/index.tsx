import React from 'react'
import "./style.scss"

function Navbar() {
  return (
    <div className='navbar'>
        <span>
        <img src="./assets/header.png" alt="logo" />
        </span>
        
        <span>
        <ul>
            <li>BMI Nedir</li>
            <li>BMI Hesapla</li>
            <li>Verilerim</li>
        </ul>
        </span>
      
    </div>
  )
}

export default Navbar;