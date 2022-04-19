import React, { createContext, useState, useContext } from "react";
import data from "../user-data.json";

const UserContext = createContext(data);
export const useData = () => useContext(UserContext);

export default function DataProvider({ children }) {
  const [userData, setUserData] = useState(data);

  const changeIP = (ip) => {
    setUserData({
      ...userData,
      ip,
    });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, changeIP }}>
      {children}
    </UserContext.Provider>
  );
}
