import React from "react";
import { Spin } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import "./ModelView.css";
import { Link } from "react-router-dom";

const ModelView = ({ handleCloseModel, model }) => {
  return (
    <>
      <div className="Model-View">
        {model === 1 ? (
          <div className="Model-Loading">
            <CircularProgress />
            <div className="Mo-lo-c">
              <h2 className="mo-lo-c-head">Loading....</h2>
              <p>Proccessing for delete</p>
            </div>
          </div>
        ) : model === 2 ? (
          <div className="Model-Success">
            <CheckCircleSharpIcon style={{ color: "green" }} />
            <h3>Success</h3>
            <p>Your Item is successfully deleted</p>
            <Link to={"/yourItem"}>
              <button className="Model-Success-button">Done</button>
            </Link>
          </div>
        ) : model === 3 ? (
          <div className="Model-error">
            <CancelSharpIcon style={{ color: "red" }} />
            <h1>Error</h1>
            <p>Please check your network</p>
            <Link to={"/yourItem"}>
              <button className="Model-Success-button">Close</button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ModelView;
