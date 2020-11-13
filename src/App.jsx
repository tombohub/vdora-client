import React, { useState } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./components/Provider";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Admin />
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
