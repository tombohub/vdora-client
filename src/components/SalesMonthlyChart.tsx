import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { Chart } from "primereact/chart";
import { Card } from "primereact/card";
import numtm from "number-to-date-month-name";

/* -------------------------------------------------------------------------- */
/*                                 Interfaces                                 */
/* -------------------------------------------------------------------------- */

interface IProps {
  className?: string;
}

interface ISalesData {
  date__month: string;
  price__sum: number;
}

/**
 * Component for holding a Chart representing sales by month
 */
export default function SalesMonthlyChart(props: IProps) {
  // data for creating a chart
  const [salesData, setSalesData] = useState<ISalesData[]>([]);

  const chartData = {
    labels: salesData.map(i => numtm.toMonth(i.date__month)),
    datasets: [
      {
        label: "Monthly Sales",
        data: salesData.map(i => i.price__sum),
        fill: true,
        borderColor: "#fff",
        backgroundColor: "#1B3C41",
      },
    ],
  };

  // fetch data and save to state
  useEffect(() => {
    axios
      .get("sales/reports/monthly/")
      .then(res => {
        const newData: ISalesData[] = res.data;
        newData.sort((a, b) =>
          a.date__month > b.date__month ? 1 : -1
        );
        setSalesData(newData);
      })
      .catch(err => console.error("error:", err));
  }, []);

  return (
    <>
      <Card title="Monthly Sales" className={props.className}>
        <Chart type="bar" data={chartData} />
      </Card>
    </>
  );
}