import React, { useContext } from "react";
import Sales from "./Sales";
import Dashboard from "./Dashboard";
import { Context } from "./Provider";

/**
 * Main windows in admin panel, contains components like Sales, Inventory based on route
 */
function Main() {
  const context = useContext(Context);

  function renderMain() {
    switch (context.activeMenu) {
      case "dashboard":
        return <Dashboard />;

      case "sales":
        return <Sales />;

      case "inventory":
        return "blabla";

      default:
        return null;
    }
  }

  return (
    <>
      <main className="p-4 flex-grow">{renderMain()}</main>
    </>
  );
}

export default Main;
