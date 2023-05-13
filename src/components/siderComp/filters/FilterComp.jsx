import { Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/slice/filterSlice";
const FilterComp = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.value);
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={"All"}>All</Radio>
        <Radio value={"Book"}>Books</Radio>
        <Radio value={"Lab Coat"}>Lab Coat</Radio>
        <Radio value={"Laptops/Phones"}>Laptops/Phones</Radio>
        <Radio value={"Clothes"}>Clothes</Radio>
        <Radio value={"HouseHold"}>HouseHold</Radio>
        <Radio value={"Other"}>Others</Radio>
      </Space>
    </Radio.Group>
  );
};
export default FilterComp;
