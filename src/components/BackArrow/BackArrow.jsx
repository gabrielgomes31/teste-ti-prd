import './style.css'
import { useNavigate } from 'react-router-dom';


export function BackArrow(){   
    const navigate = useNavigate();
    const handleMatrixClick = () => {
        navigate(`/`);
    }
    return <button className="arrow" onClick={(handleMatrixClick)}></button>


}