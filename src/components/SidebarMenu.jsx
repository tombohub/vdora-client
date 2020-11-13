import React, { useContext } from "react";
import { Menu } from "primereact/menu";

function SidebarMenu() {
  const context = useContext();

  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-line",
      url: "/dashboard",
    },
    {
      label: "Sales",
      icon: "pi pi-dollar",
    },
    {
      label: "Inventory",
      icon: "pi pi-home",
    },
  ];
  return (
    <>
      <Menu model={menuItems} />
    </>
  );
}

export default SidebarMenu;
