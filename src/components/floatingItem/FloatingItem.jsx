import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingItem.css";
import { PlusOutlined } from "@ant-design/icons";

const FloatingItem = () => {
  const [value, setValue] = useState("ci");
  return (
    <Link to={"/addItem"}>
      <div
        className="float-item"
        onMouseEnter={() => setValue("en")}
        onMouseLeave={() => setValue("ci")}
      >
        <PlusOutlined className="flt-add-icon" />
        {value === "ci" ? "" : <p>Add Item</p>}
      </div>
    </Link>
  );
};

export default FloatingItem;
