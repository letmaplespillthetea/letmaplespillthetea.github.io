// src/App.jsx
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Blogpage from "./Pages/Blogpage";
import BlogPost from "./Pages/BlogPost";
import Navbar from "./Components/Navbar";
import themeUtils from './utils/themeUtils'

function App() {
  <themeUtils/>
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
