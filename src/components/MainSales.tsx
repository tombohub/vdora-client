import React, { useEffect } from "react";
import axios from "axios";

interface Sale {
  saleId: number;
  date: string;
  SKU: string;
  product: string;
  price: number;
}

function MainSales() {
  useEffect();
  return (
    <div>
      {sales.map((sale, i) => (
        <div>{sale.product}</div>
      ))}
    </div>
  );
}

export default MainSales;
