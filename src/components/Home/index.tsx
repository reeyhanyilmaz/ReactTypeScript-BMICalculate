import React, { useState } from "react";
import "./style.scss";
import styled from "styled-components";

const Btn = styled.button`
    color: rgb(180, 114, 180);
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rgb(180, 114, 180);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: rgb(180, 114, 180);
      color: white;
    }
  `;

function Home() {  

  const Swal = require("sweetalert2");

  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [BMI, setBMI] = useState<number>();
  const [localData, setLocalData] = useState<any>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const calculate = () => {
    //input boş ise alert verir
    if (weight === 0 || name === "" || height === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "İnput alanlarını boş geçemezsiniz!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {

      //inputlar dolu ise aşağıdakiler çalışacak.
      const BMICalculate = weight / (height / 100) ** 2;
      setBMI(BMICalculate);

      localData.push({
        name: name,
        BMI: BMICalculate,
      });
      setLocalData(localData);
    
      
      //localStorage
      const handleStorage = () => {
        localStorage.setItem("userData", JSON.stringify([...localData]));
        JSON.parse(localStorage.getItem("userData") || "{}"); //  bu kısım || type error verdiği için.
      };
      handleStorage();
   
    
      //kilo aralığına göre yazılacak mesajlar
    const status = () => {
      if (BMICalculate < 18.5) {
        return "Zayıf";
      } else if (BMICalculate >= 18.5 && BMICalculate < 25) {
        return "Normal";
      } else if (BMICalculate >= 25 && BMICalculate < 30) {
        return "Fazla Kilolu";
      } else if (BMICalculate >= 30) {
        return "Obez";
      }
    };
    status();


    //hesaplama sonrası ekrana açılan bilgi alerti
    Swal.fire({
      title: `${status()}`,
      text: `${name.toUpperCase()} BMI değerin: ${BMICalculate.toFixed(1)}`,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      confirmButtonText: "Diyet programına git",
      confirmButtonColor: "rgb(180, 114, 180)",
      backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
    }).then((confirmButton: any) => {
      if (confirmButton.value) {
        window.location.href = "/diet-list";
      }
    });

    setName("");
    setWeight(0);
    setHeight(0);
    }  
  };

  return (
    <div className="home-container">
      <div>
        <img src="../assets/home.png" alt="homeimage" className="homeimage" />
      </div>

      <div>
        <form onChange={handleSubmit}>
          <span>
            <img src="./assets/name.png" alt="name" />
            <input
              type="text"
              placeholder="İsminizi giriniz..."
              onChange={(e) => setName(e.target.value)}
              required
            />
          </span>

          <span>
            <img src="./assets/kg.png" alt="kg" />
            <input
              type="number"
              placeholder="Kilonuzu giriniz, örn 50kg"
              onChange={(e) => setWeight(parseInt(e.target.value))}
              required
            />
          </span>

          <span>
            <img src="./assets/height.png" alt="cm" />
            <input
              type="number"
              placeholder="Boyunuzu giriniz, örn 160cm"
              onChange={(e) => setHeight(parseInt(e.target.value))}
              required
            />
          </span>
          <Btn onClick={calculate}>Hesapla</Btn>
        </form>
      </div>
    </div>
  );
}

export default Home;
