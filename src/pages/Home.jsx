import './style.css'

import { RedirectButton } from '../components/RedirectButton/RedirectButton';

export default function Home(){


    return (
    <div className='Home'>
        <h1 className='tittle'>Teste T.I</h1>
        <h2 className='subTittle'>Gabriel Augusto</h2>
        <div className='buttons'>
            <RedirectButton page = {"./fibonacci"} displayContent={"1. Fibonacci"}></RedirectButton>
            <RedirectButton page = {"./mdc"} displayContent={"2. MDC"}></RedirectButton>
            <RedirectButton page = {"./matrix"} displayContent={"3. Problema das Matrizes"}></RedirectButton>
        </div>
    </div>
    
    )
    
}