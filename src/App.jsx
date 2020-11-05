import React, { useState } from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./components/Context";

function App() {
  const [count, setCount] = useState(2);

  return (
    <>
      <Context.Provider value={{ count }}>
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
      </Context.Provider>
    </>
  );
}

export default App;
