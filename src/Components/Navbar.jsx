import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">^•ﻌ•^ maple</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
