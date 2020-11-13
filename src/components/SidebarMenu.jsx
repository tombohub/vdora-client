import React, { useContext } from "react";
import { Menu } from "primereact/menu";
import { Context } from "./Provider";

function SidebarMenu() {
  const context = useContext(Context);

  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-line",
      command: () => context.setActiveMenu("dashboard"),
    },
    {
      label: "Sales",
      icon: "pi pi-dollar",
      command: () => context.setActiveMenu("sales"),
    },
    {
      label: "Inventory",
      icon: "pi pi-home",
      command: () => context.setActiveMenu("inventory"),
    },
  ];
  return (
    <>
      <Menu model={menuItems} />
    </>
  );
}

export default SidebarMenu;
