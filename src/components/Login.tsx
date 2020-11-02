import React from "react";
import logo from "../assets/images/logo.webp";
import { Input, Checkbox, Button, Form } from "antd";

export default function Login() {
  return (
    <>
      <main className="h-screen w-screen flex justify-center">
        <div className="w-1/3 shadow p-4 self-center">
          <div id="logo" className="p-4">
            <img src={logo} alt="logo" className="my-0 mx-auto" />
          </div>
          <input type="text" />
          <Form>
            <Form.Item>
              <Input placeholder="shmuka username" />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="shmuka password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary">Que Vdora</Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </>
  );
}
