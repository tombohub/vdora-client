import React, { FormEvent, useContext, useState } from "react";
import logo from "../assets/images/logo.webp";
import { TextField, Button } from "@material-ui/core";
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
  function handleSubmit(e) {
    e.preventDefault();
    auth.setUsername(usernameValue);
    auth.setPassword(passwordValue);
    history.push("/dashboard");
  }

  function handleChange(e) {}
  return (
    <>
      <main className="p-24">
        <div id="container" className="max-w-sm mx-auto">
          <div id="logo">
            <img src={logo} className="mx-auto" alt="logo" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              id="username"
              name="username"
              label="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setUsernameValue(e.target.value)}
            />
            <TextField
              id="password"
              label="password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              className="my-4"
              onChange={e => setPasswordValue(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="my-4 p-3"
            >
              Come come
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
