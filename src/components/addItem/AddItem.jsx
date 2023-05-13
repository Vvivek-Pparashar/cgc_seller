import React, { useState } from "react";
import NavBar from "../navBar/NavBar";
import { Layout } from "antd";
import FooterComp from "../footerComp/FooterComp";
import WebCam from "./webcam/WebCam";
import FormComp from "./form/FormComp";
import axios from "axios";
import { useSelector } from "react-redux";
import GoogleButton from "react-google-button";
import { handleAuth } from "../utils/auth";
import { setLogin } from "../store/slice/loginSlice";
import { useDispatch } from "react-redux";

const AddItem = () => {
  // const [login, setLogin] = useState(null);
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    title: "",
    price: "",
    category: "",
    name: "",
    phoneNO: "",
    email: localStorage.getItem("email"),
    img: "",
  });

  const changeImg = (payLoad) => {
    setItemData({ ...itemData, img: payLoad });
  };

  const changeFormData = (payLoad) => {
    setItemData({ ...payLoad, img: itemData.img, email: itemData.email });
    // submit()
  };

  const submit = () => {
    axios
      .post(
        "https://cgc-seller-server.vercel.app/api/products",
        {
          ...itemData,
          email: itemData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

  const login = useSelector((state) => state.login.value);
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          {login ? (
            <div className="ic-m">
              <div className="ic-m-l">
                <WebCam changeImg={changeImg} />
              </div>
              <div className="ic-m-r">
                <FormComp
                  changeFormData={changeFormData}
                  submit={submit}
                  itemData={itemData}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h2 style={{ fontSize: "30px" }}> Sign In to add Item</h2>
              <GoogleButton onClick={() => handleAuth(handleLogin)} />
            </div>
          )}
        </Layout>
      </Layout>
      <FooterComp />
    </>
  );
};

export default AddItem;
