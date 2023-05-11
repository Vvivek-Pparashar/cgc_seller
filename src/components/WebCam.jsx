import React, { useState } from "react";
import Webcam from "react-webcam";
import { CameraOutlined, RetweetOutlined } from "@ant-design/icons";

const WebCam = ({ changeImg }) => {
  const [picture, setPicture] = useState("");
  //   const [face, setFace] = useState("environment");

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

  const reTake = ()=>{
    setPicture("");
  }
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
        // <div style={{background:"blue", width:"300px", height:"300px"}}></div>
        <img src={picture} alt="book" style={{width:"300px", height:"300px"}}/>
      )}

      {picture === "" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
          style={{
            padding: "10px 30px",
            background: "blue",
            color: "whitesmoke",
            borderRadius: "30px",
            border: "none",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:10,
            fontSize:17
          }}
        >
          <CameraOutlined className="capture" style={{fontSize:"20px"}}/>
          Capture
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            reTake();
          }}
          style={{
            padding: "10px 30px",
            background: "blue",
            color: "whitesmoke",
            borderRadius: "30px",
            border: "none",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:10,
            fontSize:17
          }}
        >
          <RetweetOutlined className="capture" style={{fontSize:"20px"}} />
          Re-Take
        </button>
      )}
    </>
  );
};

export default WebCam;
