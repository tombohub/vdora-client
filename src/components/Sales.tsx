import React from "react";

import SalesMonthlyChart from "./SalesMonthlyChart";
import NooksPayouts from "./NooksPayouts";
import { ScrollPanel } from "primereact/scrollpanel";
import ProductSalesChart from "./ProductSalesChart";
import SalesTable from "./SalesTable";

/**
 * Container holding sales related components.
 * It is inside Main component
 */
export default function Sales() {
  return (
    <>
      <ScrollPanel className="w-full h-screen">
        <div className="flex">
          <SalesMonthlyChart className="w-1/2 m-4" />

          <NooksPayouts className="w-1/2 m-4" />
        </div>
        <div className="flex justify-center">
          {/* The width needs to be less than 100%, otherwise enlrage bug */}
          <ProductSalesChart className="" style={{ width: "96%" }} />
        </div>
        <SalesTable />
      </ScrollPanel>
    </>
  );
}
