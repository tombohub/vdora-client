import React from "react";
import Sales from "./Sales";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";

/**
 * Main windows in admin panel, contains components like Sales, Inventory based on route
 */
function Main() {
  return (
    <main className="p-4 flex-grow">
      <Switch>
        <Route path="/dashboard/sales">
          <Sales />
        </Route>
        <Route path="/dashboard/inventory">hello inven</Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
