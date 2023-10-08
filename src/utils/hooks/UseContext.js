import React, { createContext, useState, useEffect } from "react";
import { UseFetch } from "../../services/api";
const HubContext = createContext([]);

export const UseHubContextProvider = ({ children }) => {
  const [agData, setAgData] = useState({});

  const { data, isPending, error } = UseFetch(
    "https://www.ag-grid.com/example-assets/olympic-winners.json"
  );

  return (
    <HubContext.Provider value={{ data, isPending, error }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubContext;
