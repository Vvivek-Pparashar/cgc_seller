import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./QA.css";

const QA = ({ question, ans, open, index, changeValue }) => {
  return (
    <>
      <div
        className="m-qa"
        style={{ borderBottom: `${index === 6 ? "none" : ""}` }}
        onClick={() => changeValue(index)}
      >
        <div className="m-qa-question">
          <span style={{ color: "black" }}>{question}</span>
          <NavigateNextIcon
            className={`navigator ${open === true ? "active" : ""}`}
          />
        </div>
        <div className={`m-qa-ans ${open === true ? "active" : ""}`}>{ans}</div>
      </div>
    </>
  );
};

export default QA;
