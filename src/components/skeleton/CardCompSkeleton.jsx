import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Skeleton from "react-loading-skeleton";

const CardCompSkeleton = () => {
  return [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
    return (
      <Col
        xs={{ span: 12 }}
        sm={{ span: 8 }}
        lg={{ span: 6 }}
        style={{ marginBottom: "20px" }}
      >
        <div
          id="card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "white",
          }}
        >
          <Skeleton className="card-img" />
          <Skeleton height={"40px"} />
          <Skeleton height={"20px"} />
        </div>
      </Col>
    );
  });
};

export default CardCompSkeleton;
