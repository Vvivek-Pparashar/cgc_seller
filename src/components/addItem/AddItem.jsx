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
import ModelView from "../model/ModelView";

const AddItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form);

  const [dataLoader, setDataLoader] = useState(false);
  const [model, setModel] = useState(1);

  const submit = () => {
    setDataLoader(true);
    axios
      .post("https://cgc-seller-server.vercel.app/api/products", { ...data })
      .then((res) => {
        console.log(res);
        setModel(2);
      })
      .catch((err) => {
        console.log(err);
        setModel(3);
      });
  };

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

  const handleModel = () => {
    setDataLoader(false);
  };

  const login = useSelector((state) => state.login.value);
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          {dataLoader ? (
            <div>
              <ModelView
                model={model}
                data={[
                  { p: "Processing Your Data" },
                  { p: "Your Item is successfully Added", link: "/" },
                ]}
                handleModel={handleModel}
              />
            </div>
          ) : (
            <></>
          )}
          {login ? (
            <div className="ic-m">
              <div className="ic-m-l">
                <WebCam />
              </div>
              <div className="ic-m-r">
                <FormComp submit={submit} />
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
                textAlign: "center",
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
