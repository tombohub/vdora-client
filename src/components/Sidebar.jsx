import React from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <aside className="border h-full col-span-2 row-span-12 bg-yellow-300">
      <SidebarLogo />
      <SidebarMenu />
    </aside>
  );
}

export default Sidebar;
