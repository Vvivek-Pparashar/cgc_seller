import React, { useEffect } from "react";
import { InputNumber, Form, Input, Select } from "antd";
import "./formComp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cngCategory,
  cngEmail,
  cngName,
  cngPhoneNo,
  cngPrice,
  cngTitle,
} from "../../store/slice/formSlice";

const FormComp = ({ submit }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.form);
  const login = useSelector((state) => state.login.value);

  console.log(data);

  const onFinish = (values) => {
    if (data.img) {
      console.log("vivek isgr8");
      submit();
    } else {
      alert("capture img");
    }
  };

  useEffect(() => {
    dispatch(cngEmail("s"));
  }, [login]);
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input the title!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              dispatch(cngTitle(e.target.value));
            }}
          />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input Price for your product",
            },
          ]}
        >
          <InputNumber
            addonBefore={"₹"}
            onChange={(e) => {
              dispatch(cngPrice(e));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please Select category for your product",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              console.log(e);
              dispatch(cngCategory(e));
            }}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Stationary">Stationary (i.e drafter, calculator, etc..)</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input
            onChange={(e) => {
              dispatch(cngName(e.target.value));
            }}
          />
        </Form.Item>

        <Form.Item
          name="phoneNo"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            addonBefore={"+91"}
            style={{ width: "100%" }}
            maxLength={10}
            onChange={(e) => {
              dispatch(cngPhoneNo(e.target.value));
            }}
          />
        </Form.Item>

        <Form.Item name="email" label="E-mail">
          <Input placeholder={data.email} disabled value={data.email} />
        </Form.Item>

        <div className="form-btn-cont">
          <button
            className="captureBtn"
            type="primary"
            style={{ cursor: `${data.img !== "" ? "pointer" : "not-allowed"}` }}
          >
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormComp;
