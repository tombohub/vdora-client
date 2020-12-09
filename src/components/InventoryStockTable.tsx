import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";

export default function InventoryStockTable() {
  const [stockData, setStockData] = useState();

  useEffect(() => {
    axios
      .get("inventory/reports/stocks/")
      .then(res => setStockData(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Card title="Inventory Stock" className="m-4">
        <DataTable value={stockData} className="">
          <Column field="product__name" header="Product" sortable />
          <Column field="Port Hope" header="Nooks" />
          <Column field="In-house" header="In-house" />
          <Column field="Total" header="Total" />
        </DataTable>
      </Card>
    </>
  );
}
