import './style.css'
import { useNavigate } from 'react-router-dom';
import { Route, Switch, Link } from "react-router-dom";


export function RedirectButton({page, displayContent}){   
    const pageRoute = `/${page}`;
    const navigate = useNavigate();
    const handleMatrixClick = () => {
        navigate(pageRoute);
    }
    return <button className="button" onClick={(handleMatrixClick)}>{displayContent}</button>
}