import React , {useState} from 'react';
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

const Swal = require('sweetalert2');

const handleSubmit = (e:any) => {
  e.preventDefault();     
}


const [name, setName] = useState<string>("");
const [weight, setWeight] = useState<number>(0);
const [height, setHeight] = useState<number>(0);
const [BMI, setBMI] = useState<number>();
const [localData, setLocalData] = useState<any>([]);

const calculate = () => {

      const BMICalculate = (weight / (height / 100) ** 2);
      setBMI(BMICalculate);

      localData.push({
        name: name,
        BMI: BMICalculate,
      })
      setLocalData(localData);

      const handleStorage = () => {
        localStorage.setItem('userData', JSON.stringify([...localData]));
        JSON.parse(localStorage.getItem('userData') || '{}'); //  bu kısım || type error verdiği için.
      }
      handleStorage();

     const status = () => {
      if (BMICalculate < 18.5) {
        return "Zayıf" }
      else if (BMICalculate >= 18.5 && BMICalculate < 25) {
        return  "Normal" }
      else if (BMICalculate >= 25 && BMICalculate < 30) {
        return "Fazla Kilolu" }
      else if (BMICalculate >= 30) {
        return "Obez" }
      }   
     status();


      Swal.fire({
        title: `${status()}`,
        text: `${name} BMI değerin: ${BMICalculate}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        confirmButtonText: 'Diyet programına git',
        confirmButtonColor: 'rgb(180, 114, 180)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `       
      }).then((confirmButton:any) => {
        if (confirmButton.value) {
          window.location.href = '/diet-list';
        }})
      
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
          <input type="text" placeholder="İsminizi giriniz..."  onChange={(e) => setName(e.target.value)}/>
          <input type="number" placeholder="Kilonuzu giriniz, örn 50kg"  onChange={(e) => setWeight(parseInt(e.target.value))}/>
          <input type="number" placeholder="Boyunuzu giriniz, örn 160cm"  onChange={(e) => setHeight(parseInt(e.target.value))}/>
          <Button onClick={calculate}>Hesapla</Button>
        </form>
      </div>
    </div>
  )
}

export default Home;