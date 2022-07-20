import React, { useState, useEffect, useContext, createContext } from "react";
import { CalculatorValues } from "../../types/calculator";

const BMIContext = React.createContext<any>({} as any)

const BMIProvider = (props:any) => {


    const Calculator = () => {
   
        const [variable, setVariable] = useState<CalculatorValues> ({
            height: 0,
            weight: 0,
            name: "",
        });   

        return { variable, setVariable };
    }

    return <BMIContext.Provider value={Calculator}>{props.children}</BMIContext.Provider>;
}

const useBMI = () => useContext(BMIContext);

export { useBMI, BMIProvider };