import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Provider";

/**
 * List Sales
 */
function MainSales() {
  const [sales, setSales] = useState([]);
  const auth = useContext(Context);

  // fetch sales
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/", {
        auth: {
          username: auth.username,
          password: auth.password,
        },
      })
      .then(res => {
        const newSales = res.data.results;
        setSales(newSales);
      })
      .catch(err => console.error("error:", err));
  }, []);

  return (
    <div>
      {sales &&
        sales.map((sale, i) => <div key={i}>{sale.product}</div>)}
    </div>
  );
}

export default MainSales;
