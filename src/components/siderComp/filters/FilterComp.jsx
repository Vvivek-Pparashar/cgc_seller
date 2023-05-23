import { Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/slice/filterSlice";
import { changeSiderState } from "../../store/slice/collapsedSlice";
const FilterComp = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.value);

  return (
    <Radio.Group onChange={(e)=>{
      dispatch(changeFilter(e.target.value));
      dispatch(changeSiderState(false));
    }} value={value}>
      <Space direction="vertical">
        <Radio value={"All"}>All</Radio>
        <Radio value={"Book"}>Books</Radio>
        <Radio value="Stationary">Stationary</Radio>
        <Radio value={"Lab Coat"}>Lab Coat</Radio>
        <Radio value={"Electronics"}>Electronics</Radio>
        <Radio value={"Clothes"}>Clothes</Radio>
        <Radio value={"HouseHold"}>HouseHold</Radio>
        <Radio value={"Other"}>Others</Radio>
      </Space>
    </Radio.Group>
  );
};
export default FilterComp;
