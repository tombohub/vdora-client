import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000//";
axios.defaults.withCredentials = true;

function Admin() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default Admin;
