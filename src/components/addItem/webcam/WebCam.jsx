import React from "react";
import Webcam from "react-webcam";
import { CameraOutlined, RetweetOutlined } from "@ant-design/icons";
import "./webCam.css";
import { useDispatch, useSelector } from "react-redux";
import { cngImg } from "../../store/slice/formSlice";

const WebCam = () => {
  const dispatch = useDispatch();
  const picture = useSelector((state) => state.form.img);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "environment",
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    dispatch(cngImg(pictureSrc));
  }, []);

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
            dispatch(cngImg(""));
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
