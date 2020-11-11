import React from "react";
import Logo from "./Logo";
import { AppBar } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="static">
      <span>Vdora Dashboard</span>
    </AppBar>
  );
}

export default Navbar;
