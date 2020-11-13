import React, { useState } from "react";

export const Context = React.createContext("");

function Provider(props) {
  // username for login
  const [username, setUsername] = useState("");

  // password for login
  const [password, setPassword] = useState("");

  // sales data from backend
  const [sales, setSales] = useState([]);

  // active state of the 'route' . Because UI framework hides the Menu Items and cannot use
  // react-router <Link>
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        sales,
        setSales,
        activeMenu,
        setActiveMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
