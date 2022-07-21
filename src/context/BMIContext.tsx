import React, { useState, useContext, createContext } from "react";

const BMIContext = createContext<any>({} as any)

const BMIProvider = (props:any) => {
     
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
            localStorage.setItem('userData', JSON.stringify({...localData, localData}));
            JSON.parse(localStorage.getItem('userData') || '{}'); //  bu kısım || type error verdiği için.
          }
          handleStorage();

          setName("");
          setWeight(0);
          setHeight(0);
  }

  <BMIContext.Provider value={{name, setName, weight, setWeight, height, setHeight, BMI, setBMI, localData, setLocalData, calculate}}>
    {props.children}
  </BMIContext.Provider>

}
const useBMI = () => useContext(BMIContext);

export { useBMI, BMIProvider };