import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
