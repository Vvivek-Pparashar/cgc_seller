import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import './FloatingItem.css'

const FloatingItem = () => {
  const [value, setValue] = useState("ci");
  return (
    <Link to={"/addItem"}>
      <div
        className="float-item"
        onMouseEnter={() => setValue("en")}
        onMouseLeave={() => setValue("ci")}
      >
        <AddIcon className="flt-add-icon" />
        {value === "ci" ? "" : "add item"}
      </div>
    </Link>
  );
};

export default FloatingItem;
