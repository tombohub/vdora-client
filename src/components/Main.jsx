import React, { useContext } from "react";
import Sales from "./Sales";
import Dashboard from "./Dashboard";
import { Context } from "./Provider";
import { Switch, Route } from "react-router-dom";
import Inventory from "./Inventory";

/**
 * Main windows in admin panel, contains components like Sales, Inventory based on route
 */
function Main() {
  const context = useContext(Context);

  /**
   * conditional rendering, in case routes not working
   */
  // function renderMain() {
  //   switch (context.activeMenu) {
  //     case "dashboard":
  //       return <Dashboard />;

  //     case "sales":
  //       return <Sales />;

  //     case "inventory":
  //       return "blabla";

  //     default:
  //       return null;
  //   }
  // }

  return (
    <>
      <main className="flex-grow bg-gray-100">
        <Switch>
          <Route path="/dashboard/sales">
            <Sales />
          </Route>
          <Route path="/dashboard/inventory">
            <Inventory />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Main;
