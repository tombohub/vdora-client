import React, { useState } from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./components/Provider";

function App() {
  return (
    <>
      <Provider>
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
      </Provider>
    </>
  );
}

export default App;
