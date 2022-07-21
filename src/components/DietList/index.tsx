import React from "react";
import "./style.scss";
import styled from "styled-components";

const P1 = styled.p`
  color: #00b3ff;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid #00b3ff;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #00b3ff;
    color: white;
  }
`;

const P2 = styled.p`
  color: #00b300;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid #00b300;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #00b300;
    color: white;
  }
`;

const P3 = styled.p`
  color: #ff9100;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid #ff9100;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ff9100;
    color: white;
  }
`;

const P4 = styled.p`
  color: #ff0000;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid #ff0000;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;

const Div = styled.div`
padding: 1em;
margin: 1em;
`;



function DietList() {
  return (
    <div className="container">
      <div className="content">
        <div className="p-tag">
          <P1> 18,5 ve altı Zayıf</P1>
          <P2>18.5 - 25 Normal</P2>
          <P3>25 - 30 Kilolu</P3>
          <P4> 30 ve üzeri Obez</P4>
        </div>
        <h1>Düşük Kalorili Haftalık Diyet Listesi</h1>

        <div className="food-div">
          <Div>
            <p>Kahvaltı <img src="./assets/breakfast.png" alt="breakfast" /> </p>
            ✓ Yiyebildiğiniz kadar domates, salatalık, biber, maydanoz, roka, nane. <br />
            ✓ 2 adet iyi haşlanmış yumurta 5 tam ceviz içi. <br />
            ✓ Damak zevkine göre pul biber, kimyon, karabiber yumurtaya eklenir . <br />
            <em>Not: Ekmek yemeniz önerilmiyor.</em> 
          </Div>
          <Div>
            <p>Öğle Yemeği <img src="./assets/diet.png" alt="diet" /> </p>
            ✓ 1 kase mercimek çorbası <em>(yağlı olmamalı)</em> <br />
            ✓ 1 büyük kase salatalık, biber, domatesli semizotu salatası. <br />
            ✓ 1 kase yoğurt ve 1 çay kaşığı toz zerdeçalı karıştırıp tüketebilirsiniz. <br />
            ✓ İstediğiniz kadar maydanoz, roka, nane, dereotu gibi yeşillikler.
          </Div>

          <Div>
            <p>Ara Öğün <img src="./assets/ara-ogun.png" alt="ara-ogun" />  </p>    
            ✓ 3 yemek kaşığı lor peyniri 5 tam ceviz <em>(ekmek yerine
            tüketilecektir)</em>. <br />
            ✓ 1 fincan Türk kahvesi veya filtre kahve içilebilir. <br />
            ✓ Veya 1 porsiyon mevsim meyvesi.
          </Div>

          <Div>
            <p>Akşam Yemeği <img src="./assets/dinner.png" alt="dinner" /> </p>
            ✓ 2 ince dilim karpuz  <em>(eğer yoksa 1 adet şeftali, elma gibi mevsim meyvesi) </em> <br />
            ✓ 4 yemek kaşığı lor peyniri , <em>(Az yağlı ve
            tuzlu olması öneriliyor)</em> <br />
            ✓ 5 tam ceviz içi <em>(ekmek yerine yiyeceğinizi unutmayın) </em> <br />
            ✓ 1 kase bol domatesli, salatalıklı semizotu salatası bol limon sosla beraber.
          </Div>
        </div>
      </div>
    </div>
  );
}

export default DietList;
