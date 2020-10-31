import React, { useEffect, useState } from "react";
import axios from "axios";

interface Sale {
  saleId: number;
  date: string;
  SKU: string;
  product: string;
  price: number;
}

interface Sales {
  sales: Sale[];
}

function MainSales() {
  const [sales, setSales] = useState<Sales | object[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/sales/`)
      .then(res => {
        const newSales: Sales = res.data.results;
        console.log(newSales);
        setSales(newSales);
      })
      .catch(err => console.error("error:", err));
  }, []);
  return (
    <div>
      {/* {sales.map((sale, i) => (
        <div>{sale.product}</div>
      ))} */}
    </div>
  );
}

export default MainSales;
