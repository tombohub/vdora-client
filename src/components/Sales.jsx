import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SalesMonthlyChart from "./SalesMonthlyChart";
import NooksPayouts from "./NooksPayouts";

/**
 * List Sales
 */
export default function Sales() {
  const context = useContext(Context);

  // fetch sales
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/", {
        // auth: {
        //   username: context.username,
        //   password: context.password,
        // },
      })
      .then(res => {
        const newSales = res.data.results;
        context.setSales(newSales);
      })
      .catch(err => console.error("error:", err));
  }, []);

  return (
    <>
      <SalesMonthlyChart />
      <NooksPayouts />
      <DataTable
        value={context.sales}
        className="p-datatable-gridlines"
        autoLayout={true}
        paginator={true}
        rows={10}
      >
        {/* <Column field="id" header="Id" sortable></Column> */}
        <Column field="date" header="Date" sortable></Column>
        <Column field="sku" header="SKU"></Column>
        <Column field="product" header="Product"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="price" header="Price"></Column>
      </DataTable>
    </>
  );
}
