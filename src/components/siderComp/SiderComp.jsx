import React from "react";
import "./SiderComp.css";
import FilterComp from "./filters/FilterComp";
import { useDispatch, useSelector } from "react-redux";
import { changeSiderState } from "../store/slice/collapsedSlice";
import { CloseOutlined } from "@ant-design/icons";

const SiderComp = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.collapsed.sider);
  return (
    <div className={`sider ${open ? "active" : ""}`}>
      <CloseOutlined
        onClick={() => {
          dispatch(changeSiderState(false));
        }}
        className="sider-close-icon"
      />
      <h1>Apply Filters</h1>
      <FilterComp />
    </div>
  );
};

export default SiderComp;
