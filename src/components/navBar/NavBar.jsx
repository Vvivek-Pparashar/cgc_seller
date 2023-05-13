import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { handleAuth } from "../utils/auth";
import AvatarComp from "./AvatarComp";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut, setLogin } from "../store/slice/loginSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.value);

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState({
    email: localStorage.getItem("email"),
    avatar: localStorage.getItem("avatar"),
  });


  const setEmailNull = () => {
    localStorage.clear();
    setEmail({ email: null, avatar: null });
    dispatch(setLogOut(false));
  };

  const handleLogin = ()=>{
    dispatch(setLogin(true));
  }

  useEffect(() => {
    if (localStorage.getItem("email")) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    }
  }, []);

  useEffect(() => {
    setEmail({
      email: localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar"),
    });
  }, [login]);

  // console.log("vivek auth");
  // console.log(email);
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
            <AvatarComp avatar={email.avatar} setEmailNull={setEmailNull} />
          ) : (
            <button
              className="add-item-button"
              style={{
                padding: "7px 20px",
                color: "white",
                background: "black",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleAuth(handleLogin);
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
