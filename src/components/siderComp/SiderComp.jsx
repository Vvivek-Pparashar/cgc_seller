import React from "react";
import "./SiderComp.css";
import FilterComp from "./filters/FilterComp";

const SiderComp = ({ sider, change2 }) => {
  return (
    <div className={`sider ${sider ? "active" : ""}`}>
      <div className={`sider-comp  ${sider ? "active" : ""}`}>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <h2>Apply Filter</h2>
          <FilterComp />
        </div>
      </div>
    </div>
  );
};

export default SiderComp;
