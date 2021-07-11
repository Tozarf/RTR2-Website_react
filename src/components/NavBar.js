import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          TOZARF
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
