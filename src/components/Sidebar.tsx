import React from "react";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <Logo className="w-56" color="light" />
        </Link>
      </div>

      <div className="my-4">
        <SidebarMenu />
      </div>
    </aside>
  );
}

export default Sidebar;
