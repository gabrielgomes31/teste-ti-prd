import './style.css'
import { useNavigate } from 'react-router-dom';


export function RedirectButton({page, displayContent}){   
    const navigate = useNavigate();
    const handleMatrixClick = () => {
        navigate(`/${page}`);
    }
    return <button className="button" onClick={(handleMatrixClick)}>{displayContent}</button>


}