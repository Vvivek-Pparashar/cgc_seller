import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import FooterComp from "../footerComp/FooterComp";
import { Col, Layout, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SiderComp from "../siderComp/SiderComp";

const YourItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((res) => {
        setData(
          res.data.filter(
            (item) => item.email === localStorage.getItem("email")
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          {/* <SiderComp/> */}
          <Content className="site-layout-background">
            <h1
              style={{
                fontSize: "35px",
                textAlign: "center",
                color: "#3fa9f9",
              }}
            >
              Your Item's
            </h1>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              {data.length ? (
                data.map((e) => {
                  return (
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 8 }}
                      lg={{ span: 6 }}
                      style={{ marginBottom: "20px" }}
                    >
                      <Link to={`/item/${e._id}`}>
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
                })
              ) : (
                <div style={{display:"flex", flexDirection:"column"}}>
                  <h3>You have selled all of your item's </h3>
                  <Link to={'/addItem'}>
                        <div>Add item</div>
                  </Link>
                </div>
              )}
            </Row>
          </Content>
        </Layout>
        <FooterComp />
      </Layout>
    </>
  );
};

export default YourItem;
