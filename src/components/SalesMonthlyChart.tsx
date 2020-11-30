import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { Chart } from "primereact/chart";
import { Card } from "primereact/card";
import numtm from "number-to-date-month-name";
import randomcolor from "randomcolor";

/* -------------------------------------------------------------------------- */
/*                                 Interfaces                                 */
/* -------------------------------------------------------------------------- */

interface IProps {
  className?: string;
}

interface ISalesData {
  date__month: string;
  Etsy: number;
  Nooks: number;
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
        type: "bar",
        label: "Nooks",
        data: salesData.map(sale => sale.Nooks),
        borderColor: "#fff",
        backgroundColor: randomcolor({
          luminosity: "dark",
          hue: "green",
        }),
      },
      {
        type: "bar",
        label: "Etsy",
        data: salesData.map(sale => sale.Etsy),
        borderColor: "#fff",
        backgroundColor: randomcolor({
          luminosity: "dark",
          hue: "#646215",
        }),
      },
    ],
  };

  let chartOptions = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
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
        <Chart type="bar" data={chartData} options={chartOptions} />
      </Card>
    </>
  );
}
