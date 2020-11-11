import React from "react";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <aside className="w-48 inline ">
      <Logo />
      <SidebarMenu />
    </aside>
  );
}

export default Sidebar;
