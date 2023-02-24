import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Posts from "../screens/post";
import SinglePost from "../screens/singlepost";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
