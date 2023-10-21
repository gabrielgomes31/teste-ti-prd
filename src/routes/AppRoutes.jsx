import { Route, Routes } from 'react-router-dom';
import MatrixProblem from '../pages/MatrixProblem'
import Fibonacci from '../pages/Fibonacci';
import MDC from '../pages/MDC';
import Home from '../pages/Home'
import FibonacciProblem from '../pages/Fibonacci';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fibonacci" element={<FibonacciProblem />} />
            <Route path="/mdc" element={<MDC />} />
            <Route path="/matrix" element={<MatrixProblem />} />
        </Routes>
    )
}
