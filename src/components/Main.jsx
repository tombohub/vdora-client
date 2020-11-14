import React, { useContext } from "react";
import Sales from "./Sales";
import Dashboard from "./Dashboard";
import { Context } from "./Provider";
import { Switch, Route } from "react-router-dom";

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
      <main className="p-4 flex-grow">
        <Switch>
          <Route path="/dashboard/sales">
            <Sales />
          </Route>
          <Route path="/dashboard/inventory">blslls</Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Main;
