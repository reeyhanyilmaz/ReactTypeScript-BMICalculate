import React, {useState} from 'react';
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
    const [name, setName] = useState<string>("");
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [BMI, setBMI] = useState<number>();
    const [localData, setLocalData] = useState<any>([]);

  const handleSubmit = (e:any) => {
        e.preventDefault();              
  }

    const calculate = () => {

          const BMICalculate = (weight / (height / 100) ** 2);
          setBMI(BMICalculate);

          localData.push({
            name: name,
            BMI: BMICalculate,
          })
          setLocalData(localData);

          const handleStorage = () => {
            localStorage.setItem('userData', JSON.stringify({...localData, localData}));
            JSON.parse(localStorage.getItem('userData') || '{}'); //  bu kısım || type error verdiği için.
          }
          handleStorage();

          setName("");
          setWeight(0);
          setHeight(0);
  }

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