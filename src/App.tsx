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
axios.defaults.baseURL = "http://mikaroko.pythonanywhere.com/";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

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
