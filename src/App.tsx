import React from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
