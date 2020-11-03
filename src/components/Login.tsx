import React from "react";
import logo from "../assets/images/logo.webp";
import { TextField, Button } from "@material-ui/core";

export default function Login() {
  return (
    <>
      <main className="p-24">
        <div id="container" className="max-w-sm mx-auto">
          <div id="logo">
            <img src={logo} className="mx-auto" alt="logo" />
          </div>
          <form action="">
            <TextField
              id="username"
              name="username"
              label="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="my-4"
            >
              Come come
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
