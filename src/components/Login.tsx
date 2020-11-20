import React, { FormEvent, useContext, useState } from "react";
import logo from "../assets/images/logo.webp";
import { Context } from "./Provider";
import { useHistory } from "react-router-dom";

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
    auth.setUsername(usernameValue);
    auth.setPassword(passwordValue);
    history.push("/dashboard");
  }

  return (
    <>
      <main className="p-24">
        <div id="container" className="max-w-sm mx-auto">
          <div id="logo">
            <img src={logo} className="mx-auto" alt="logo" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              id="username"
              name="username"
              onChange={e => setUsernameValue(e.target.value)}
            />
            <input
              id="password"
              type="password"
              className="my-4"
              onChange={e => setPasswordValue(e.target.value)}
            />
            <button type="submit" className="my-4 p-3">
              Come come
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
