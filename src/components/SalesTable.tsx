import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Context } from "./Provider";

export default function SalesTable() {
  const context = useContext(Context);

  // fetch sales from database
  useEffect(() => {
    axios
      .get("sales/")
      .then(res => {
        const newSales = res.data.results;
        context.setSales(newSales);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Card className="m-4" title="List of Sales">
      <DataTable
        value={context.sales}
        className="p-datatable-gridlines"
        autoLayout={true}
        paginator={true}
        rows={10}
      >
        <Column field="date" header="Date" sortable></Column>
        <Column field="sku" header="SKU"></Column>
        <Column field="product.name" header="Product"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="price" header="Price"></Column>
      </DataTable>
    </Card>
  );
}
