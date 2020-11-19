import React, { useContext } from "react";
import { Menu } from "primereact/menu";
import { Context } from "./Provider.jsx";
import { useHistory } from "react-router-dom";

function SidebarMenu() {
  const context = useContext(Context);
  const history = useHistory();
  const menuItems = [
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
      <Menu model={menuItems} className="bg-gray-200" />
    </>
  );
}

export default SidebarMenu;
