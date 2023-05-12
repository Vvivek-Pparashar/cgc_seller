import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import { Layout } from "antd";
import FooterComp from "../footerComp/FooterComp";
import "./ItemContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import { ArrowLeftOutlined, PhoneOutlined } from "@ant-design/icons";

const ItemContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://cgc-seller-server.vercel.app/api/products/${id}`)
      .then((res) => {
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const ownerData = [
    {
      id: "Name",
      value: data.name,
    },
    {
      id: "Phone No",
      value: `+91 ${data.phoneNo}`,
    },
    {
      id: "Email",
      value: data.email,
    },
  ];

  return (
    <>
      <Layout className="main">
        <NavBar />

        <Layout className="site-layout" id="main-comp">
          <div className="ic-m">
            <div className="ic-m-l">
              <img src={data.img} alt="Book" />
            </div>
            <div className="ic-m-r">
              <h3 className="ic-m-r-h3">{data.title}</h3>
              <div className="ic-m-r-pc">
                <h4 className="ic-m-r-h4">Price : </h4>
                <p className="ic-m-r-s-p">₹ {data.price}</p>
              </div>

              <div className="ic-m-r-pc">
                <h4 className="ic-m-r-h4">Category : </h4>
                <p className="ic-m-r-s-p">{data.category}</p>
              </div>

              <h4 className="ic-m-r-h4">Owner Details :</h4>
              <ul className="ic-m-r-ul">
                {ownerData.map((e) => {
                  return (
                    <li>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <h5 className="ic-m-r-h5">{e.id} : </h5>
                        <p style={{ fontSize: "15px" }}>{e.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`tel:${data.phoneNo}`}
                style={{ marginTop: "10px" }}
                className="ic-m-r-btn"
              >
                <PhoneOutlined style={{ transform: "rotate(90deg)" }} />
                Call Now
              </a>

              <div className="ic-m-r-linkcont">
                <Link to={"/"} className="ic-m-r-link">
                  <ArrowLeftOutlined style={{ fontSize: "19px" }} />
                  <p className="ic-m-r-s-p">Go to Products</p>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </Layout>
      <FooterComp />
    </>
  );
};

export default ItemContainer;
