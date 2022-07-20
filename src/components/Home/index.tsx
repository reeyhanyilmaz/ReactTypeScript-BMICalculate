import React from 'react';
import './style.scss';
import styled from 'styled-components';

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

  return (
    <div className='home-container'>
      <div>
        <img src="../assets/home.png" alt="" />
      </div>

      <div>
        <form action="">
          <input type="text" placeholder="İsminizi giriniz..." />
          <input type="number" placeholder="Kilonuzu giriniz, örn 50kg" />
          <input type="number" placeholder="Boyunuzu giriniz, örn 160cm" />
          <Button type="submit">Hesapla</Button>
        </form>
      </div>
    </div>
  )
}

export default Home;