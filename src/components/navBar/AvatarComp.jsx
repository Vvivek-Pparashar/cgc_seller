import React from "react";
import { Dropdown } from "antd";
import {
  LogoutOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const AvatarComp = ({ avatar, setEmailNull }) => {
  const items = [
    {
      key: "1",
      label: (
        <NavLink
          to={"/addItem"}
          style={{
            borderBottom: "1px solid #dbdbdb",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "17px",
            gap: "20px",
            padding: "10px 0px",
          }}
        >
          <UploadOutlined />
          Add Item
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to={"/yourItem"}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "17px",
            gap: "20px",
            padding: "0px 0px",
          }}
        >
          <AppstoreOutlined />
          Your Item
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <button
          style={{
            padding: "7px 30px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
            background: "#3fa9f9",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setEmailNull()}
        >
          <LogoutOutlined />
          Sign out
        </button>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: "40px",
          height: "40px",
          clipPath: "circle()",
          cursor: "pointer",
        }}
      />
    </Dropdown>
  );
};

export default AvatarComp;
