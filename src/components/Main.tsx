import React from "react";
import Sales from "./Sales";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import Inventory from "./Inventory";

interface IProps {
  className?: string;
}

/**
 * Main windows in admin panel, contains components like Sales, Inventory based on route
 */
function Main(props: IProps) {
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
      <main className={props.className}>
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
