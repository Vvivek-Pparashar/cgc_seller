import { Layout } from "antd";
import React, { useState } from "react";
import "./App.css";
import ContinerComp from "./components/ContainerComp";
import NavBar from "./components/NavBar";
import SiderComp from "./components/SiderComp";
import FooterComp from "./components/FooterComp";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState({ mode: "light" });

  const [sider, setSider] = useState(false);

  const change = () => {
    console.log("jjjj");
    setSider(true);
  };

  const change2 = () => {
    console.log("ommmg");
    setSider(false);
  };

  const L2D = () => {
    setMode({ mode: "dark" });
  };

  const D2L = () => {
    setMode({ mode: "light" });
  };

  const changeColl = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout className="main">
        <NavBar mode={!mode} collapsed={collapsed} changeColl={changeColl} />

        <Layout className="site-layout" id="main-comp">
        <SiderComp mode={mode} collapsed={collapsed} sider={sider} change2={change2} />
        <ContinerComp mode={mode} D2L={D2L} L2D={L2D} change={change}/>
        </Layout>
        <FooterComp />
      </Layout>
    </>
  );
};
export default App;
