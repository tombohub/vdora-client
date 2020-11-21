import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import cookies from "js-cookie";

import { Context } from "./Provider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SalesMonthlyChart from "./SalesMonthlyChart";
import NooksPayouts from "./NooksPayouts";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";

/**
 * List Sales
 */
export default function Sales() {
  const context = useContext(Context);
  // axios.defaults.withCredentials = true;
  // fetch sales from database
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/", {
        withCredentials: true,
      })
      .then(res => {
        const newSales = res.data.results;
        context.setSales(newSales);
      })
      .catch(err =>
        console.error("error:", err, cookies.get("csrftoken"))
      );
  }, []);

  /* --------------------------------- return --------------------------------- */

  return (
    <>
      <ScrollPanel className="w-full h-screen">
        <div className="flex">
          <SalesMonthlyChart className="w-1/2 m-4" />

          <NooksPayouts className="w-1/2 m-4" />
        </div>

        <Card className="m-4" title="List of Sales">
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
        </Card>
      </ScrollPanel>
    </>
  );
}
