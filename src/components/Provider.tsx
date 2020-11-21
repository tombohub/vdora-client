import React, { ReactChild, SetStateAction, useState } from "react";

interface ISale {
  url: string;
  id: number;
  date: string;
  sku: string;
  product: string;
  quantity: string;
  price: number;
}

interface IContext {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  sales: ISale[];
  setSales: React.Dispatch<SetStateAction<ISale[]>>;
}

interface IProps {
  children: ReactChild;
}

export const Context = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
  sales: [{}],
  setSales: (sales: ISale[]) => {},
});

function Provider(props: IProps) {
  // is user logged in
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // sales data from backend
  const [sales, setSales] = useState<ISale[]>([]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        sales,
        setSales,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
