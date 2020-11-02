import React from "react";
import logo from "../assets/images/logo.webp";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
