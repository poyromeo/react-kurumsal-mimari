import React, { createContext, useState, useEffect } from "react";
import { UseFetch } from "../../services/api";
const HubContext = createContext([]);

export const UseHubContextProvider = ({ children }) => {
  const { data, isPending, error } = UseFetch(
    "https://www.ag-grid.com/example-assets/olympic-winners.json"
  );

  const columnDefs = [
    { field: "athlete", minWidth: 170 },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];

  return (
    <HubContext.Provider value={{ data, isPending, error, columnDefs }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubContext;
