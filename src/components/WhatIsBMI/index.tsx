import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import styled from "styled-components";

const Button = styled.button`
  color: #00b300;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #00b300;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #00b300;
    color: white;
  }
`;

function WhatIsBMI() {
  return (
    <div className="container">
      <div className="content">
        <h1>Vücut Kitle Endeksi (BMI) Nedir?</h1>
        <p>
          Vücut Kitle Endeksi, bir diğer adıyla boy kilo indeksi vücudunuzdaki
          tahmini yağ oranını gösteren bir değerdir. İnsanın kilosunun boyuna
          göre normal olup olmadığının anlaşılması için kullanılır. Elde edilen
          değerle insanın kendisi için sağlıklı ve ideal kiloya ne kadar yakın
          olduğunu gösterir.
        </p>

        <img src="./assets/nedir.jpg" alt="" />

        <p>
          Daha fazla bilgi almak isterseniz{" "}
          <a
            href="https://evrimagaci.org/vucut-kitle-endeksi-bmi-nedir-bu-sayi-ne-kadar-islevsel-bir-saglik-olcutudur-2605"
            target="_blank"
          >
            tıklayabilirsiniz.
          </a>{" "}
        </p>

        <Link className="link" to="/">
          <Button>Hesaplamak için tıklayınız...</Button>
        </Link>
      </div>
    </div>
  );
}

export default WhatIsBMI;
