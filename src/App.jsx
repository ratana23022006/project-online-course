import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/layout";  
import Home from "./pages/Home";
import About from "./pages/About";
import Library from "./pages/Library";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";


const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
  );
};

export default App;