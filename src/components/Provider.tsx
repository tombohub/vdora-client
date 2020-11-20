import React, { ReactChild, SetStateAction, useState } from "react";

interface IContext {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  sales: string;
  setSales: React.Dispatch<SetStateAction<string>>;
}

interface IProps {
  children: ReactChild;
}

export const Context = React.createContext({
  username: "",
  setUsername: (username: string) => {},
  password: "",
  setPassword: (password: string) => {},
  sales: "",
  setSales: (sales: string) => {},
});

function Provider(props: IProps) {
  // username for login
  const [username, setUsername] = useState<string>("");

  // password for login
  const [password, setPassword] = useState<string>("");

  // sales data from backend
  const [sales, setSales] = useState<string>("");

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        sales,
        setSales,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
