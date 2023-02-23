import { Routes, Route } from 'react-router-dom';
import { Display } from '../pages/Display';
import Home from '../pages/Home';

const AllRoutes = () => (

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />        
    </Routes>

);

export default AllRoutes;