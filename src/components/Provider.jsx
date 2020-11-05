import React, { useState } from "react";

export const Context = React.createContext("");

function Provider(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Context.Provider
      value={{ username, password, setUsername, setPassword }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
