import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <main className="grid grid-cols-12 grid-rows-12 h-screen w-screen">
      <Sidebar />
      <Navbar />
    </main>
  );
}

export default Layout;
