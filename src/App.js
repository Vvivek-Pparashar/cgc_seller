import { Layout } from "antd";
import React, { useState } from "react";
import "./App.css";
import ContinerComp from "./components/ContainerComp";
import NavBar from "./components/NavBar";
import SiderComp from "./components/SiderComp";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState({ mode: "dark" });

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
      <Layout>
        <NavBar mode={!mode} collapsed={collapsed} changeColl={changeColl} />

        <Layout className="site-layout">
          <SiderComp mode={mode} collapsed={collapsed} />
          {/* <Content></Content> */}
          <ContinerComp mode={mode} D2L={D2L} L2D={L2D} />
        </Layout>
      </Layout>
    </>
  );
};
export default App;
