import React from "react";
import Skeleton from "react-loading-skeleton";

const SingleItemSkeleton = ({ ownerData }) => {
  return (
    <div className="ic-m">
      <div className="ic-m-l">
        <Skeleton width={"300px"} height={"300px"} style={{ flex: 1 }} />
      </div>
      <div className="ic-m-r">
        <Skeleton height={"50px"} />

        <Skeleton height={"30px"} />
        <Skeleton />
        {ownerData.map((e) => {
          return (
            <>
              <Skeleton height={"30px"} />
              <Skeleton />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SingleItemSkeleton;
