import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextProps {
  value: string;
  setValue: (value: string) => void;
}

const MyContext = createContext<ContextProps | null>(null);

export const MyProvider = (props: PropsWithChildren) => {
  const [value, setValue] = useState(new Date().toISOString());

  return <MyContext.Provider value={{ value, setValue }}>{props.children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
