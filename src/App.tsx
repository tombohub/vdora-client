import React from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./components/Provider";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import axios from "axios";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

axios.defaults.baseURL = "http://localhost:8000//";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}

export default App;
