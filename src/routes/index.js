import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Display } from "../pages/Display";
import Home from "../pages/Home";

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/display" element={<Display />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
