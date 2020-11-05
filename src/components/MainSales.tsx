import React, { useEffect, useState } from "react";
import axios from "axios";

interface Sale {
  saleId: number;
  date: string;
  SKU: string;
  product: string;
  price: number;
}

function MainSales() {
  const [sales, setSales] = useState<Sale[]>([]);

  // fetch sales
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/", {
        auth: {
          username: "user",
          password: "pass",
        },
      })
      .then(res => {
        const newSales: Sale[] = res.data.results;
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
