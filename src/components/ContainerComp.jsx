import React from "react";
import { Layout, Row, FloatButton, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./ContainerComp.css";
const { Meta } = Card;

// import DataBase from "./DataBase";
// import CardComp from "./CardComp";

const { Content } = Layout;

const ContinerComp = ({ mode, D2L, L2D, change }) => {
  return (
    <Content
      className="site-layout-background"
      // style={{
      //   margin: "20px 10px",
      //   padding: "24px 20px",
      //   background: "white",
      //   height: "100%",
      // }}
    >
      <button className="filter-btn" onClick={change}>Filters</button>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {[1, 1, 1, 1, 1].map(() => {
          return (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ marginBottom: "20px" }}
            >
              <div id="card">
                <img
                  className="card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />

                <div className="card-con">
                  <h3>MAthematics book 1</h3>
                  <div className="card-con-btm">
                  <p>price : 230</p>
                  <p>Buy</p>
                  </div>
                  
                </div>
              </div>
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
