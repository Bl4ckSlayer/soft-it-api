import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [allData, setAllData] = useState();
  return (
    <DataContext.Provider value={{ allData, setAllData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
