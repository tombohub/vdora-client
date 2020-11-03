import React from "react";
import logo from "../assets/images/logo.webp";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: "25px",
  },
}));

export default function Login() {
  const classes = useStyles();

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
              className="my-4"
              required
              fullWidth
            />
            <button className="my-4">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                // style={{ marginTop: "90px" }}
                className={classes.submit}
              >
                Come comed
              </Button>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
