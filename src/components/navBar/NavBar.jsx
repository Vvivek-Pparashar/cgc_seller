import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { handleAuth } from "../utils/auth";
import AvatarComp from "./AvatarComp";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState({ email: null, avatar: null });

  const handleEmail = (payload) => {
    console.log(payload);
    setEmail({ email: payload.email, avatar: payload.photoURL });
  };

  const setEmailNull = () => {
    localStorage.clear();
    setEmail({ email: null, avatar: null });
  };

  useEffect(() => {
    setEmail({
      email: localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar"),
    });
  }, []);

  console.log("vivek auth");
  console.log(email);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to={"/"}>
            <h1 className="logo">CGC Seller</h1>
          </Link>

          <div className={`menu-sm ${open ? "active" : ""}`}>
            <h1 className="logo">CGC Seller</h1>
            <ul className="menu-sm-items">
              <li>
                <Link to={"/"}>Home</Link>
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

          <ul className="menu-items">
            <li>
              <Link to={"/"}>Home</Link>
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
          {/* <NavLink to={"/addItem"}> */}

          {email.email ? (
            <AvatarComp avatar={email.avatar} setEmailNull={setEmailNull}/>
          ) : (
            <button
              className="add-item-button"
              style={{
                padding: "7px 20px",
                color: "white",
                background: "black",
                border: "none",
                borderRadius: "20px",
                cursor:"pointer"
              }}
              onClick={() => {
                handleAuth(handleEmail);
              }}
            >
              Add Item
            </button>
          )}

          {/* </NavLink> */}

          {/* <button
            onClick={() => {
              localStorage.clear();
              setEmail({ email: null, avatar: null });
            }}
          >
            Logout
          </button> */}

          <button className="menu-item-button" onClick={() => setOpen(!open)}>
            X
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
