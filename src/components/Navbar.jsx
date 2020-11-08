import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border bg-blue-200 h-12 flex">
      <Logo />
      <ul className="flex">
        <li>
          <a href="#">Sales</a>
        </li>
        <li>
          <a href="#">Inventory</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
