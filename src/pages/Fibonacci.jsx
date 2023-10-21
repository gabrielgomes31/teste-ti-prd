import './style.css'

import { useState, useEffect } from "react";
import { BackArrow } from '../components/BackArrow/BackArrow';

export default function FibonacciProblem() {

    return (
        <div className='Fibonacci'>
            <BackArrow></BackArrow>
            <h3 className='enun'>1. Na matemática, a sucessão de Fibonacci (ou sequência de Fibonacci), é uma sequência de números inteiros, começando normalmente 
                por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores. A sequência recebeu o nome do matemático italiano Leonardo 
                de Pisa ou Leonardo Fibonacci, mais conhecido por apenas Fibonacci, que descreveu, no ano de 1202, o crescimento de uma população de coelhos, a partir desta. 
                Esta sequência já era, no entanto, conhecida na antiguidade.</h3>
            <h3 className='letra'>a. Escreva um algoritmo que imprima os n primeiros números da sequência de Fibonacci.</h3>
            <Fibonacci/>
            <h3 className='letra'>b. Você concorda com a abordagem de Fibonacci para descrever o crescimento de uma população de coelhos? Justifique.</h3>
            <h3 className='resposta_escrita'>Concordo, a Sequência de Fibonacci pode ser abordada para o crescimento populacional de coelhos, pois o número de casais de coelhos crescem de acordo
                com a sequência, no início possuindo 1 casal, depois 2 casais, 3 casais, 5, 8 e assim adiante.  </h3>
            
        </div>
    );
}

function Fibonacci() {
    const [N, setN] = useState();
    const [List, setList] = useState([]);

    const handleInputChange = (event) => {
        setN(event.target.value);
    }

    const fibo = (N) => {
        if(N == 0 || N == 1) {
            return N;
        }
        else {
            return fibo(N - 1) + fibo(N - 2);
        }
    }

    const createSequence = () => {
        if (N <= 0) {
            return;
        }    

        const sequence = [];
        for(let i = 0; i < N; i++) {
            sequence.push(fibo(i));
        }
        setList(sequence);
    }

    return (
        <div>
            <div>
                <input
                    className='input inputFibo'
                    type="number"
                    value={N}
                    onChange={handleInputChange}
                    placeholder='Digite o valor de n'
                />
                <button className='calculateButton' onClick={createSequence}>Imprimir</button>
            </div>            
            <p className='resposta'>Sequência:</p>
            <ul className='list'>
                {List.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>    
        </div>
    )
}