import React from "react";
import "./SiderComp.css";

const SiderComp = ({ sider, change2 }) => {
  return (
    <div className={`sider ${sider ? "active" : ""}`}>
      <div className={`sider-comp  ${sider ? "active" : ""}`}>
        <button
          onClick={() => {
            change2();
          }}
        >
          X
        </button>
        vivek
      </div>
    </div>
  );
};

export default SiderComp;
