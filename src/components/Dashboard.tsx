import React from "react";
import ProductTransferForm from "./ProductTransferForm";
import SalesMonthlyChart from "./SalesMonthlyChart";

/**
 * Initail dashboard data
 */
export default function Dashboard() {
  return (
    <>
      <ProductTransferForm />
      <SalesMonthlyChart className="w-1/2 m-4" />
    </>
  );
}
