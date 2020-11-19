import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

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
