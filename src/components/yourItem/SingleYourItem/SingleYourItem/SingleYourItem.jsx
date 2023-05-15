import React, { useEffect, useState } from "react";
import NavBar from "../../../navBar/NavBar";
import { Layout } from "antd";
import FooterComp from "../../../footerComp/FooterComp";
import { Link, ScrollRestoration } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import SingleItemSkeleton from "../../../skeleton/SingleItemSkeleton";
import ModelView from "../../../model/ModelView";

const SingleYourItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dataLoader, setDataLoader] = useState(false);
  const [data, setData] = useState({});
  const [model, setModel] = useState(1);

  useEffect(() => {
    axios
      .get(`https://cgc-seller-server.vercel.app/api/products/${id}`)
      .then((res) => {
        setData(res.data.product);
        setLoading(false);
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

  const handleModel = () => {
    setDataLoader(false);
  };

  return (
    <>
      <Layout className="main">
        <NavBar />

        <Layout className="site-layout" id="main-comp">
          {dataLoader ? (
            <div>
              <ModelView
                model={model}
                data={[
                  { p: "Processing For Deletion" },
                  { p: "Your Item is successfully Deleted", link: "/yourItem" },
                ]}
                handleModel={handleModel}
              />
            </div>
          ) : (
            <></>
          )}
          {loading ? (
            <SingleItemSkeleton ownerData={ownerData} />
          ) : (
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

                <div
                  style={{
                    marginTop: "10px",
                    background: "red",
                    cursor: "pointer",
                  }}
                  className="ic-m-r-btn"
                  onClick={() => {
                    setDataLoader(true);
                    axios
                      .delete(
                        `https://cgc-seller-server.vercel.app/api/products/${id}`
                      )
                      .then(() => {
                        setModel(2);
                      })
                      .catch(() => {
                        setModel(3);
                      });
                  }}
                >
                  <DeleteFilled />
                  Delete Item
                </div>

                <div className="ic-m-r-linkcont">
                  <Link to={"/yourItem"} className="ic-m-r-link">
                    <ArrowLeftOutlined style={{ fontSize: "19px" }} />
                    <p className="ic-m-r-s-p">Go to Your Item's</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Layout>
      </Layout>
      <FooterComp />
      <ScrollRestoration />
    </>
  );
};

export default SingleYourItem;
