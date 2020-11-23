import React, { useContext } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/api";
import { Context } from "./Provider";
import { useHistory } from "react-router-dom";

function SidebarMenu() {
  const history = useHistory();
  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-line",
      command: () => history.push("/dashboard"), //context.setActiveMenu("dashboard"),
    },
    {
      label: "Sales",
      icon: "pi pi-dollar",
      command: () => history.push("/dashboard/sales"), //() => context.setActiveMenu("sales"),
    },
    {
      label: "Inventory",
      icon: "pi pi-home",
      command: () => history.push("/dashboard/inventory"), //context.setActiveMenu("inventory"),
    },
  ];
  return (
    <>
      <Menu
        model={menuItems}
        className="w-full border-none bg-transparent"
      />
    </>
  );
}

export default SidebarMenu;
