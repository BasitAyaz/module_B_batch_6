import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import Home from "../screens/home";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home Page</Link>
          <Link to="/about">About Page</Link>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
