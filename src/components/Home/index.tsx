import React from 'react';
import './style.scss';
import styled from 'styled-components';
import {useBMI } from "../../context/BMIContext";

function Home() {
 
  const Button = styled.button`
  color: rgb(180, 114, 180);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(180, 114, 180);
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    background-color: rgb(180, 114, 180);
    color: white;
  }
`;

const handleSubmit = (e:any) => {
  e.preventDefault();              
}

const {name, setName, calculate, weight, setWeight, height, setHeight} = useBMI();

  return (
    <div className='home-container'>
      <div>
        <img src="../assets/home.png" alt="" />
      </div>

      <div>
        <form  onChange={handleSubmit}>        
          <input type="text" placeholder="İsminizi giriniz..."  value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="number" placeholder="Kilonuzu giriniz, örn 50kg" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))}/>
          <input type="number" placeholder="Boyunuzu giriniz, örn 160cm" value={height} onChange={(e) => setHeight(parseInt(e.target.value))}/>
          <Button type="submit" onClick={calculate}>Hesapla</Button>        
        </form>
      </div>
    </div>
  )
}

export default Home;