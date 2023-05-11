import React, { useState } from "react";
import Webcam from "react-webcam";
import { CameraOutlined, RetweetOutlined } from "@ant-design/icons";
import "./webCam.css";

const WebCam = ({ changeImg }) => {
  const [picture, setPicture] = useState("");
  
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "environment",
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
    changeImg(pictureSrc);
  }, [changeImg]);

  const reTake = () => {
    setPicture("");
  };
  return (
    <>
      {picture === "" ? (
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          width={300}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          mirrored={false}
        />
      ) : (
        <img
          src={picture}
          alt="book"
          style={{ width: "300px", height: "300px" }}
        />
      )}

      {picture === "" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
          className="captureBtn"
        >
          <CameraOutlined className="capture" style={{ fontSize: "20px" }} />
          Capture
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            reTake();
          }}
          className="captureBtn"
        >
          <RetweetOutlined className="capture" style={{ fontSize: "20px" }} />
          Re-Take
        </button>
      )}
    </>
  );
};

export default WebCam;
