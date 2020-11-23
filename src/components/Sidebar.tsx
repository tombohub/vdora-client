import React from "react";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import { Card } from "primereact/card";

interface IProps {
  className: string;
  style?: object;
}

function Sidebar(props: IProps) {
  return (
    <aside
      className={`h-screen bg-gray-900 shadow-2xl ${props.className}`}
      style={props.style}
    >
      <div className="my-4">
        <Logo className="w-56" color="light" />
      </div>

      <div className="my-4">
        <SidebarMenu />
      </div>
    </aside>
  );
}

export default Sidebar;
