import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context
interface ContextProps {
  value: string;
  setValue: (value: string) => void;
}

// Create the context
const MyContext = createContext<ContextProps | null>(null);

// Provider component
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(new Date().toISOString());

  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};

// Custom hook for accessing the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
