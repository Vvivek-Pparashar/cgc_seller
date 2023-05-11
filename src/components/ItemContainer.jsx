import React from "react";
import NavBar from "./NavBar";
import { Layout } from "antd";
import FooterComp from "./FooterComp";
import "./ItemContainer.css";
import { Link } from "react-router-dom";

const ItemContainer = () => {
  return (
    <>
      <Layout className="main">
        <NavBar />

        <Layout className="site-layout" id="main-comp">
          <div className="ic-m">
            <div className="ic-m-l">
              <img
                src="../../math.jpg"
                alt="Book"
              />
            </div>
            <div className="ic-m-r">
              <h3 style={{ fontSize: "40px" }}>Mathematics Book</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <h4 style={{ fontSize: "20px" }}>Price : </h4>
                <p style={{ fontSize: "20px" }}>$ 350</p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <h4 style={{ fontSize: "20px" }}>Category : </h4>
                <p style={{ fontSize: "20px" }}>Book</p>
              </div>

              <h4 style={{ fontSize: "20px" }}>Owner Details :</h4>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap:"5px",
                  paddingLeft: "30px",
                }}
              >
                <li>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h5 style={{ fontSize: "15px" }}>Name : </h5>
                    <p style={{ fontSize: "15px" }}>Vivek Parashar</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h5 style={{ fontSize: "15px" }}>Phone No : </h5>
                    <p style={{ fontSize: "15px" }}>+91 9350320310</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h5 style={{ fontSize: "15px" }}>Email : </h5>
                    <p style={{ fontSize: "15px" }}>
                      Vivekparashartkd@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
              {/* <h1>Vivek</h1> */}
              <button
                style={{
                  width: "100%",
                  padding: "5px 10px",
                  marginTop: "10px",
                }}
              >
                <a href="tel:9350320310">Call Now</a>
              </button>

              <Link to={"/"}><p>{"<"}--- Go to Products</p></Link>
            </div>
          </div>
        </Layout>
      </Layout>
      <FooterComp />
    </>
  );
};

export default ItemContainer;
