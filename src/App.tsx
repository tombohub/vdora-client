import React from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
            <Layout />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
