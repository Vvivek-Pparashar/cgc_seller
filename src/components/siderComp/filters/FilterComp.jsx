import { Radio, Space } from "antd";
import { useState } from "react";
const FilterComp = () => {
  const [value, setValue] = useState("All");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={"All"}>All</Radio>
        <Radio value={"Books"}>Books</Radio>
        <Radio value={"Lab Coat"}>Lab Coat</Radio>
        <Radio value={"Laptops/Phones"}>Laptops/Phones</Radio>
        <Radio value={"Clothes"}>Clothes</Radio>
        <Radio value={"HouseHold"}>HouseHold</Radio>
        <Radio value={"Others"}>Others</Radio>
      </Space>
    </Radio.Group>
  );
};
export default FilterComp;
