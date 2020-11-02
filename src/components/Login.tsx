import React from "react";
import { Input, Checkbox, Button, Form } from "antd";

export default function Login() {
  return (
    <>
      <div className="">
        <Form>
          <Form.Item>
            <Input placeholder="shmuka username" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="shmuka password" />
          </Form.Item>
          <Checkbox>Remember me</Checkbox>
          <Button>Que Vdora</Button>
        </Form>
      </div>
    </>
  );
}
