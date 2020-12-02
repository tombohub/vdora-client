import React, { useContext } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import { Context } from "./components/Provider";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import axios from "axios";

/* --------------------------------- apollo --------------------------------- */
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

/* ---------------------------------- axios --------------------------------- */

axios.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : null;
  return config;
});

function App() {
  const context = useContext(Context);
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard/">
              {context.isLoggedIn ? <Admin /> : <Redirect to="/" />}
            </Route>

            <Route path="/">
              {context.isLoggedIn ? (
                <Redirect to="/dashboard/" />
              ) : (
                <Login />
              )}
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
