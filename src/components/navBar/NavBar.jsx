import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { handleAuth } from "../utils/auth";
import AvatarComp from "./AvatarComp";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut, setLogin } from "../store/slice/loginSlice";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

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

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

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

  console.log("vivek auth");
  // console.log(email);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">

          {open ? (
            <CloseOutlined
              onClick={() => setOpen(false)}
              style={{ fontSize: "20px" }}
            />
          ) : (
            <MenuOutlined
              onClick={() => setOpen(true)}
              style={{ fontSize: "20px" }}
            />
          )}

          <Link to={"/"} style={{display:"flex", justifyContent:"center"}}>
            <img
              src="../../../logo2.png"
              alt="logo"
              style={{ width: "200px" }}
            />
          </Link>

          <div className={`menu-sm ${open ? "active" : ""}`}>
            <Link to={"/"}>
              <img
                src="../../../logo2.png"
                alt="logo"
                style={{ width: "180px" }}
              />
            </Link>
            <ul className="menu-sm-items">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/faq"}>Faq's</Link>
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
