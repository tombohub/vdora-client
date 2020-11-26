import React, { useEffect, useState } from "react";
import axios from "axios";
import randomColor from "randomcolor";

import { Chart } from "primereact/chart";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import { isPropertySignature } from "typescript";

interface IProductSale {
  product__name: string;
  product__count: number;
}

interface IProps {
  className?: string;
  style?: object;
}

/**
 * Share of products in sale. Best selling products.
 * Number of units sold.
 */
export default function ProductSalesChart(props: IProps) {
  const [productSales, setProductSales] = useState<IProductSale[]>(
    []
  );

  useEffect(() => {
    axios
      .get("sales/product_sales/")
      .then(res => {
        const newProductSales: IProductSale[] = res.data;
        newProductSales.sort((a, b) =>
          a.product__name > b.product__name ? 1 : -1
        );
        setProductSales(newProductSales);
      })
      .catch(err => console.error(err));
  }, []);

  function getTopProducts() {}

  const chartData = {
    labels: productSales.map(product => product.product__name),
    datasets: [
      {
        data: productSales.map(product => product.product__count),
        backgroundColor: randomColor({
          count: productSales.length,
        }),
      },
    ],
  };
  return (
    <>
      <Card className={props.className} style={props.style}>
        <Chart type="pie" data={chartData} />
      </Card>
    </>
  );
}
