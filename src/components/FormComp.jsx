import React from "react";
import { Button, InputNumber, Form, Input, Select } from "antd";

// const { Option } = Select;

const FormComp = ({ changeFormData, submit }) => {
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
        autoComplete="off"
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
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        > */}
          <div style={{display:"flex", width:"100%", justifyContent:"flex-end", flexDirection:"column"}}>
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
              Submit
            </Button>
          </div>
        {/* </Form.Item> */}
      </Form>
    </>
  );
};

export default FormComp;
