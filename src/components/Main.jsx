import React from "react";
import MainSales from "./MainSales";

function Main() {
  return (
    <main className="bg-green-300  w-full inline-block">
      <div className="grid grid-cols-12 grid-rows-12">
        <MainSales />
      </div>
    </main>
  );
}

export default Main;
