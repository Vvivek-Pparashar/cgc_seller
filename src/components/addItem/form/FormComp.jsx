import React from "react";
import { InputNumber, Form, Input, Select } from "antd";
import "./formComp.css";

// const { Option } = Select;

const FormComp = ({ changeFormData, submit, itemData }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    changeFormData(values);
    submit();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
        onFinishFailed={onFinishFailed}
        // autoComplete="
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
          <Input />
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
          <InputNumber addonBefore={"₹"} />
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
          <Select>
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Drafter">Drafter</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
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
          <Input />
        </Form.Item>

        <Form.Item
          name="phoneNo"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={"+91"} style={{ width: "100%" }} maxLength={10} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
        >
          <Input placeholder={itemData.email} disabled value = {itemData.email}/>
        </Form.Item>

        <div className="form-btn-cont">
          <button className="captureBtn" type="primary" htmlType="submit">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormComp;
