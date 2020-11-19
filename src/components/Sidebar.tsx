import React from "react";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <aside className="h-screen bg-gray-200">
      <div className="my-4">
        <Logo />
      </div>
      <div className="my-4">
        <SidebarMenu />
      </div>
    </aside>
  );
}

export default Sidebar;
