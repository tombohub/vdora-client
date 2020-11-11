import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Grid, Typography, Paper } from "@material-ui/core";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default Dashboard;
