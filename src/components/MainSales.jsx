import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { DataGrid, ColDef } from "@material-ui/data-grid";

/**
 * List Sales
 */
function MainSales() {
  const [sales, setSales] = useState([]);
  const auth = useContext(Context);
  const columns = [
    { field: "id", headerName: "id", width: 60 },
    { field: "date", headerName: "date", width: 130 },
    { field: "sku", headerName: "sku", width: 120 },
    { field: "product", headerName: "product", width: 400 },
    { field: "quantity", headerName: "quantity" },
    {
      field: "price",
      headerName: "price",
      valueFormatter: ({ value }) => "$" + value,
    },
  ];

  // fetch sales
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/", {
        // auth: {
        //   username: auth.username,
        //   password: auth.password,
        // },
      })
      .then(res => {
        const newSales = res.data.results;
        setSales(newSales);
      })
      .catch(err => console.error("error:", err));
  }, []);

  return (
    <>
      <div style={{ height: "40em" }}>
        <DataGrid rows={sales} columns={columns} pageSize={10} />
      </div>
    </>
  );
}

export default MainSales;
