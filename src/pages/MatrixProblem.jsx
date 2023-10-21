import './style.css'

import { BackArrow } from '../components/BackArrow/BackArrow';
import { useState, useEffect } from "react";

export default function MatrixProblem() {
    const [order, setOrder] = useState();

    const handleInputChange = (event) => {
        setOrder(event.target.value);
    }

    return (
        <div className="MatrixProblem">
            <BackArrow></BackArrow>
            <h3 className='enun'>3. A matriz quadrada é a aquela que possui o número de linhas m igual ao número de colunas n. Escreva um algoritmo no qual o usuário escolha o 
                tamanho de uma matriz quadrada, insira elemento por elemento e por fim calcule a diferença entre a diagonal principal e secundaria da matriz</h3>
            <input
                className='input'
                type="number"
                placeholder= {"Digite a ordem da matriz"}
                onChange={handleInputChange}
            />
            {order && <> <p className = "resposta">Por favor, preencha a matriz abaixo de acordo com os valores desejados: </p> <Matrix order={parseInt(order)}/></>}
        </div>
    );
}

function Matrix({ order }) {
    // Cria uma matriz de estados para controlar os valores dos inputs
    const [matrix, setMatrix] = useState(() =>
        Array.from({ length: order }, () => Array(order).fill(0))
    );
    const [result, setResult] = useState();

    // Função para lidar com mudanças nos valores dos inputs
    const handleInputChange = (e, row, col) => {
        const newValue = e.target.value;
        setMatrix((prevMatrix) => {
            const newMatrix = [...prevMatrix];
            newMatrix[row][col] = newValue;
            return newMatrix;
        });
    };
    // sempre que a order mudar, resetar a matriz
    useEffect(() => {
        setMatrix(() =>
        Array.from({ length: order }, () => Array(order).fill(0))
        );
    }, [order]);

    const firstColumn = () => {
        let sum = 0;
        for (let i = 0; i < order; i++) {
            sum = sum + parseInt(matrix[i][i]);
        }
        return sum;
    };
    const secondColumn = () => {
        let sum = 0;
        for (let i = 0; i < order; i++) {
            sum = sum + parseInt(matrix[i][order - i-1]);
        }
        return sum;
    };
    const calculateDiff = () => {
        return firstColumn() - secondColumn();
    };

    useEffect(() => {
        setResult(calculateDiff());
    }, [matrix]);

    return (
        <div className='matrix'>
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <input className='matrixCell'
                        key={`${rowIndex}-${colIndex}`}
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
            <p className='resposta'>{"Diferença: " + result}</p>
        </div>
    );
}
