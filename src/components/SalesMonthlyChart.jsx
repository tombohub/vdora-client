import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { Chart } from "primereact/chart";
import { Card } from "primereact/card";

import numtm from "number-to-date-month-name";

/**
 * Component for holding a Chart representing sales by month
 */
export default function SalesMonthlyChart(props) {
  // data for creating a chart
  const [data, setData] = useState([]);

  // for getting auth credentials
  const context = useContext(Context);

  const chartData = {
    labels: data.map(i => numtm.toMonth(i.date__month)),
    datasets: [
      {
        label: "Monthly Sales",
        data: data.map(i => i.price__sum),
        fill: true,
        borderColor: "#4bc0c0",
      },
    ],
  };

  // fetch data and save to state
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/reports/monthly", {
        // auth: {
        //     username: context.username,
        //     password: context.password
        // },
      })
      .then(res => {
        const newData = res.data;
        setData(newData);
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
