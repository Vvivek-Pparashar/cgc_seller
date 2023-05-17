import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import "./ContainerComp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../store/slice/filterSlice";
import CardCompSkeleton from "../skeleton/CardCompSkeleton";
import { changeSiderState } from "../store/slice/collapsedSlice";

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
      <button
        className="filter-btn"
        onClick={() => {
          dispatch(changeSiderState(true));
        }}
      >
        Filter
      </button>
      <Row gutter={[18, 2]} style={{ padding: "0 10px" }}>
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
                  <div
                    id="card"
                    style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
                  >
                    <img className="card-img" alt="example" src={e.img} />

                    <div className="card-con">
                      <h3 style={{ color: "white", fontSize: "17px" }}>
                        {e.title}
                      </h3>
                      <div className="card-con-btm">
                        <p style={{ fontSize: "15px" }}>₹ {e.price}</p>
                        <p style={{ fontSize: "15px" }}>{e.category}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })
        ) : (
          <div className="cnt-addItem-btn-cnt">
            <h1 style={{ fontSize: "30px" }}>Nothing Found!!!</h1>
            <Link to={"/addItem"}>
              <button className="cnt-addItem-btn">Add Item</button>
            </Link>
          </div>
        )}
      </Row>
    </Content>
  );
};

export default ContinerComp;
