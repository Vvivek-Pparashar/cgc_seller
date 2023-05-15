import React, { useEffect, useState } from "react";
import { Layout, Row, FloatButton, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import "./ContainerComp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../store/slice/filterSlice";
import CardCompSkeleton from "../skeleton/CardCompSkeleton";
import { changeSiderState } from "../store/slice/collapsedSlice";

// import DataBase from "./DataBase";
// import CardComp from "./CardComp";

const { Content } = Layout;

const ContinerComp = ({ change }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  useEffect(() => {
    console.log("chchch");
    if (filter === "All") {
      setFilterData(data);
    } else {
      setFilterData(data.filter((item) => item.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    dispatch(changeFilter("All"));
    axios
      .get("https://cgc-seller-server.vercel.app/api/products")
      .then((response) => {
        setData(response.data);
        setFilterData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Content className="site-layout-background">
      <button className="filter-btn" onClick={()=>{
        dispatch(changeSiderState(true))
      }}>
        Filter
      </button>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {loading ? (
          <CardCompSkeleton />
        ) : filterData.length ? (
          filterData.reverse().map((e) => {
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>Nothing Found!!!</h1>
            <Link to={"/addItem"}>
              <button
                style={{
                  padding: "7px 20px",
                  borderRadius: "20px",
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Add Item
              </button>
            </Link>
          </div>
        )}
      </Row>
    </Content>
  );
};

export default ContinerComp;
