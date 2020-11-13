import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Admin() {
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

export default Admin;
