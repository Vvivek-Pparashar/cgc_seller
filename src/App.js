import { Layout } from "antd";
import React from "react";
import "./App.css";
import ContinerComp from "./components/containerComp/ContainerComp";
import NavBar from "./components/navBar/NavBar";
import SiderComp from "./components/siderComp/SiderComp";
import FooterComp from "./components/footerComp/FooterComp";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          <SiderComp />
          <ContinerComp />
        </Layout>
        <FooterComp />
      </Layout>
      <ScrollRestoration />
    </>
  );
};
export default App;
