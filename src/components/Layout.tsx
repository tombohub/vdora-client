import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen w-screen">
      <Sidebar />
      <Navbar />
      <Main />
    </div>
  );
}

export default Layout;
