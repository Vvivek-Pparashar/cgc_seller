import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import { Layout } from "antd";
import FooterComp from "../footerComp/FooterComp";
import WebCam from "./webcam/WebCam";
import FormComp from "./form/FormComp";
import axios from "axios";

const AddItem = () => {
  // const [login, setLogin] = useState(null);
  const [itemData, setItemData] = useState({
    title: "",
    price: "",
    category: "",
    name: "",
    phoneNO: "",
    email: "",
    img: "",
  });

  const changeImg = (payLoad) => {
    setItemData({ ...itemData, img: payLoad });
  };

  const changeFormData = (payLoad) => {
    setItemData({ ...payLoad, img: itemData.img });
  };

  const submit = () => {
    axios
      .post("https://cgc-seller-server.vercel.app/api/products", {
        ...itemData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   setLogin(localStorage.getItem("email"));
  // }, []);
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          {localStorage.getItem("email") != null ? <>h1</> : <>h2</>}
          <div className="ic-m">
            <div className="ic-m-l">
              <WebCam changeImg={changeImg} />
            </div>
            <div className="ic-m-r">
              <FormComp changeFormData={changeFormData} submit={submit} />
            </div>
          </div>
        </Layout>
      </Layout>
      <FooterComp />
    </>
  );
};

export default AddItem;
