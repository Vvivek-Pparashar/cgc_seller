import React, { useState } from "react";
import NavBar from "./NavBar";
import { Layout } from "antd";
import FooterComp from "./FooterComp";
import WebCam from "./WebCam";
import FormComp from "./FormComp";
import axios from "axios";

const AddItem = () => {
  const [itemData, setItemData] = useState({
    title: "",
    price: "",
    category: "",
    name: "",
    phoneNO: "",
    email: "",
    img: "",
  });

  console.log(itemData);

  const changeImg = (payLoad) => {
    setItemData({ ...itemData, img: payLoad });
    console.log("vivek");
  };

  const changeFormData = (payLoad) => {
    setItemData({ ...payLoad, img: itemData.img });
  };

  const submit = () => {
    console.log("clicked submited")
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
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
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
