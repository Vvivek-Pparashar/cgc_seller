import React from "react";
import { Typography, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title, Paragraph } = Typography;

const NavBar = ({ mode, collapsed, changeColl }) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        padding: "0 20px",
        background: mode.mode === "dark" ? "#001529" : "white",
        boxShadow: "3px 2px 5px 0 rgba(0,0,0,0.16)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.1s linear",
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        style: { color: mode.mode === "dark" ? "white" : "black" },
        size: "large",
        onClick: () => changeColl(),
      })}

      <div className="right_header">
        <i
          class="bell fa fa-bell"
          aria-hidden="true"
          style={{ color: mode.mode === "dark" ? "white" : "black" }}
        ></i>
      </div>
    </Header>
  );
};

export default NavBar;
