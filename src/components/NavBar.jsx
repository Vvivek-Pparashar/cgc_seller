import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
          <h1 class="logo">CGC Seller</h1>

          <div className={`menu-sm ${open ? "active" : ""}`}>
            <h1 class="logo">CGC Seller</h1>
            <ul class="menu-sm-items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Faq's</a>
              </li>
            </ul>
          </div>

          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Faq's</a>
            </li>
          </ul>
          <NavLink to={"/addItem"}>
            <button className="add-item-button">Add Your Item</button>
          </NavLink>

          <button className="menu-item-button" onClick={() => setOpen(!open)}>
            X
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
