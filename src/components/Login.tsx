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
        </div>
      </main>
    </>
  );
}
