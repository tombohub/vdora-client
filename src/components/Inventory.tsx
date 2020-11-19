import { ScrollPanel } from "primereact/scrollpanel";
import React from "react";
import InventoryStockTable from "./InventoryStockTable";

export default function Inventory() {
  return (
    <>
      <ScrollPanel className="w-full h-screen">
        <InventoryStockTable />
      </ScrollPanel>
    </>
  );
}
