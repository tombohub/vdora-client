import React, { useContext } from "react";
import { Context } from "./Context";

function Dashboard() {
  const kok = useContext(Context);
  return (
    <>
      <div>{kok.count}</div>
    </>
  );
}

export default Dashboard;
