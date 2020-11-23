import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar className="w-56" />
        <Main className="flex-1 px-2" />
      </div>
    </>
  );
}

export default Admin;
