import React, { useState } from "react";
import Webcam from "react-webcam";

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
          // facingMode = {face}
          mirrored={true}
        />
        // <div style={{background:"blue", width:"300px", height:"300px"}}></div>
      ) : (
        <img src={picture} alt="book" />
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          capture();
        }}
        style={{padding:"10px 30px", background:"blue", color:"whitesmoke", borderRadius:"20px", border:"none"}}
      >
        Capture
      </button>
    </>
  );
};

export default WebCam;
