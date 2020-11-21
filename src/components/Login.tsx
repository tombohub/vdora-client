import React, { FormEvent, useContext, useState } from "react";
import logo from "../assets/images/logo.webp";
import axios from "axios";
import { Context } from "./Provider";
import { useHistory } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

/**
 * Login into the dashboard.
 * Sets the username and password into Context
 */
export default function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const auth = useContext(Context);
  const history = useHistory();

  /**
   * Sets credentials into context and rediect to dashboard
   *
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // auth.setUsername(usernameValue);
    // auth.setPassword(passwordValue);
    // history.push("/dashboard");

    axios
      .post("http://localhost:8000/login/", {
        username: usernameValue,
        password: passwordValue,
      })
      .then(res => {
        if (res.status === 200) history.push("/dashboard");
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <main className="pt-24 bg-gray-100 h-screen">
        <div id="container" className="sm:max-w-sm w-full mx-auto">
          <Card className="p-4">
            <div id="logo">
              <img src={logo} className="mx-auto mb-8" alt="logo" />
            </div>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col justify-center"
            >
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                className="mb-4"
                name="username"
                onChange={e =>
                  setUsernameValue(e.currentTarget.value)
                }
              />
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                className="mb-4"
                type="password"
                onChange={e =>
                  setPasswordValue(e.currentTarget.value)
                }
              />
              <Button
                label="Come come"
                type="submit"
                className="my-4 p-3"
              />
            </form>
          </Card>
        </div>
      </main>
    </>
  );
}
