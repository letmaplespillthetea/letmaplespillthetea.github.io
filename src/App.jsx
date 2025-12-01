// src/App.jsx
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Arts from "./Pages/Arts";
import ProjectPage from "./Pages/ProjectPage";
import Blogpage from "./Pages/Blogpage";
import BlogPost from "./Pages/BlogPost";
import Navbar from "./Components/Navbar";

function App() {
  <themeUtils/>
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="artwork" element={<Arts />} />
      </Routes>
    </Router>
  );
}

export default App;
