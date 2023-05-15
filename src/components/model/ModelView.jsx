import React from "react";
import { Spin } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import "./ModelView.css";
import { Link } from "react-router-dom";

const ModelView = ({ handleModel, model, data }) => {
  return (
    <>
      <div className="Model-View">
        {model === 1 ? (
          <div className="Model-Loading">
            <CircularProgress />
            <div className="Mo-lo-c">
              <h2 className="mo-lo-c-head">Loading....</h2>
              <p>{data[0].p}</p>
            </div>
          </div>
        ) : model === 2 ? (
          <div className="Model-Success">
            <CheckCircleSharpIcon style={{ color: "green" }} />
            <h3>Success</h3>
            <p>{data[1].p}</p>
            <Link to={data[1].link}>
              <button className="Model-Success-button">Done</button>
            </Link>
          </div>
        ) : model === 3 ? (
          <div className="Model-error">
            <CancelSharpIcon style={{ color: "red" }} />
            <h1>Error</h1>
            <p>Please check your network</p>
            <button
              onClick={() => {
                handleModel();
              }}
              className="Model-Success-button"
            >
              Close
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ModelView;
