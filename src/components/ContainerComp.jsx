import React, { useEffect, useState } from "react";
import { Layout, Row, FloatButton, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import "./ContainerComp.css";
import { Link } from "react-router-dom";
import axios from "axios";

// import DataBase from "./DataBase";
// import CardComp from "./CardComp";

const { Content } = Layout;

const ContinerComp = ({ mode, D2L, L2D, change }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if(data.length) data.map

  return (
    <Content className="site-layout-background">
      <button className="filter-btn" onClick={change}>
        Filters
      </button>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {data.map((e) => {
          return (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ marginBottom: "20px" }}
            >
              <Link to={`/${e._id}`}>
                <div id="card">
                  <img className="card-img" alt="example" src={e.img} />

                  <div className="card-con">
                    <h3>{e.title}</h3>
                    <div className="card-con-btm">
                      <p>price : {e.price}</p>
                      <p>Buy</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>

      <FloatButton.Group icon={<SettingOutlined />} trigger="click">
        <FloatButton
          icon={<i class="fa fa-sun-o" aria-hidden="true"></i>}
          type={mode.mode === "light" ? "primary" : "default"}
          onClick={() => {
            D2L();
          }}
        />
        <FloatButton
          icon={<i class="fa fa-moon-o" aria-hidden="true"></i>}
          type={mode.mode === "dark" ? "primary" : "default"}
          onClick={() => {
            L2D();
          }}
        />
      </FloatButton.Group>
    </Content>
  );
};

export default ContinerComp;
