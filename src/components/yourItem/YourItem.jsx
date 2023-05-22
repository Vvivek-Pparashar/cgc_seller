import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import FooterComp from "../footerComp/FooterComp";
import { Col, Layout, Row } from "antd";
import axios from "axios";
import { Link, ScrollRestoration } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import GoogleButton from "react-google-button";
import { handleAuth } from "../utils/auth";
import { setLogin } from "../store/slice/loginSlice";
import CardCompSkeleton from "../skeleton/CardCompSkeleton";
import "./YourItem.css";

const YourItem = () => {
  const login = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          {loading ? (
            <Content className="site-layout-background">
              <Row gutter={[18, 2]} style={{ padding: "0 10px" }}>
                <CardCompSkeleton />
              </Row>
            </Content>
          ) : login ? (
            <Content className="site-layout-background">
              <h1 className="your-item-h1">Your Item's</h1>
              <Row gutter={[18, 2]}>
                {data.filter(
                  (item) => item.email === localStorage.getItem("email")
                ).length ? (
                  data
                    .filter(
                      (item) => item.email === localStorage.getItem("email")
                    )
                    .map((e) => {
                      return (
                        <Col
                          xs={{ span: 12 }}
                          sm={{ span: 8 }}
                          lg={{ span: 6 }}
                          style={{ marginBottom: "20px" }}
                        >
                          <Link to={`/yourItem/${e._id}`}>
                            <div id="card">
                              <img
                                className="card-img"
                                alt="example"
                                src={e.img}
                              />

                              <div className="card-con">
                                <h3
                                  style={{ fontSize: "19px", color: "black" }}
                                >
                                  {e.title}
                                </h3>
                                <div className="card-con-btm">
                                  <p style={{ fontSize: "17px" }}>
                                    $ {e.price}
                                  </p>
                                  <p style={{ fontSize: "17px" }}>
                                    {e.category}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Col>
                      );
                    })
                ) : (
                  <div className="empty-youritem-cnt">
                    <h3 style={{ fontSize: "25px" }}>
                      You have selled all of your item's
                    </h3>
                    <Link to={"/addItem"}>
                      <button className="empty-youritem-btn">Add item</button>
                    </Link>
                  </div>
                )}
              </Row>
            </Content>
          ) : (
            <div className="yi-sign">
              <h2 style={{ fontSize: "30px" }}> Sign In to get your Item</h2>
              <GoogleButton onClick={() => handleAuth(handleLogin)} />
            </div>
          )}
        </Layout>
        <FooterComp />
        <ScrollRestoration />
      </Layout>
    </>
  );
};

export default YourItem;
