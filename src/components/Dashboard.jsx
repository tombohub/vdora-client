import React from "react";
import { Chart } from "primereact/chart";

/**
 * Initail dashboard data
 */
export default function Dashboard() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "#4bc0c0",
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "#565656",
      },
    ],
  };
  return (
    <>
      <Chart type="line" data={data} />
    </>
  );
}
