import { createContext, useState } from "react";

export const dataContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <dataContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </dataContext.Provider>
  );
}
