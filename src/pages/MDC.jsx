import './style.css'

import { BackArrow } from '../components/BackArrow/BackArrow';
import { useState, useEffect } from "react";

export default function MDC() {
    
    return (
        <div className='MDCProblem'>
            <BackArrow></BackArrow>
            <h3 className='enun'>2. MDC significa máximo divisor comum. O máximo divisor comum entre dois ou mais números naturais é o maior de 
                seus divisores. Dois números naturais sempre têm divisores em comum.</h3>
            <h3 className='enun'>Os divisores de um número natural podem ser encontrados dividindo este número pelos números naturais maiores que zero. 
                Quando a divisão for exata, ou seja, com resto zero, então tal número é divisor do número dado.</h3>
            <h3 className='enun'>Escreva um algoritmo para calcular o MDC de determinada lista.</h3>
            <MDCProblem/>
        </div>
    )
}

function MDCProblem () {
    const [inputValue, setInputValue] = useState(''); 
    const [numbers, setNumbers] = useState([]); 
    const [result, setResult] = useState(0);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const mdc = (a,b) => {
        while (b !== 0){
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
    const calculateMdcForNumberList = (numbersList) => {
        let mdcFactor = numbersList[0];
        for (let i = 1; i < numbersList.length; i++) {
            mdcFactor = mdc(mdcFactor, numbersList[i]);
        }
        return mdcFactor;
    }
    useEffect(()=> setResult(calculateMdcForNumberList(numbers)), [numbers])
  
    const handleAddNumber = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        if (inputValue.trim() !== '') {
          setNumbers([...numbers, inputValue.trim()]);
          setInputValue(''); 
        }
      }
    };
  
    return (
        <div>
            <input className='input inputMDC'
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleAddNumber}
                placeholder="Digite um número e pressione Enter"
            />
            <div>
                <ul className='list'>
                    {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                    ))}
                </ul>
            </div>
            <p className='resposta'>
                {"Resultado: "}
                {result ?? 0 }
            </p>
        </div>
    );
}
