import React, { useState } from "react";
import Data from "./Data";
import QA from "./QA/QA";
import "./Faqs.css";
import { ScrollRestoration } from "react-router-dom";
import FooterComp from "../footerComp/FooterComp";
import { Layout } from "antd";
import NavBar from "../navBar/NavBar";

const Faqs = () => {
  const [value, setValue] = useState(0);

  const changeValue = (e) => {
    setValue(e);
  };

  console.log(value);
  for (let i = 0; i < Data.length; i++) {
    Data[i].Open = false;
  }

  Data[value].Open = true;
  console.log(value);

  const Qa = Data.map((e) => {
    return (
      <QA
        question={e.Ques}
        ans={e.Ans}
        open={e.Open}
        index={e.Index}
        changeValue={changeValue}
      />
    );
  });

  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          <div className="m-fa">
            <div className="m-fa-c">
              <h2 className="m-fa-c-h2">FAQ's</h2>
              <div className="m-fa-qa">{Qa}</div>
            </div>
          </div>
        </Layout>
        <FooterComp />
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default Faqs;
