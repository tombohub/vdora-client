import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";
import { DataGrid } from "@material-ui/data-grid";

/**
 * List Sales
 */
function MainSales() {
  const [sales, setSales] = useState([]);
  const auth = useContext(Context);
  const columns = [
    { field: "id", headerName: "id" },
    { field: "date", headerName: "date" },
    { field: "sku", headerName: "sku" },
    { field: "product", headerName: "product" },
    { field: "quantity", headerName: "quantity" },
    { field: "price", headerName: "price" },
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
      <div>
        {sales &&
          sales.map((sale, i) => <div key={i}>{sale.product}</div>)}
      </div>
      <DataGrid rows={sales} columns={columns} />
    </>
  );
}

export default MainSales;
