import React, { createContext, useState, useEffect } from "react";
const HubContext = createContext([]);

export const UseHubContextProvider = ({ children }) => {
  const [agDataGrid, setAgDataGrid] = useState([]);

  const [columnDefs] = useState([
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
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAgDataGrid(data);
      });
  }, []);

  return (
    <HubContext.Provider value={{ agDataGrid, columnDefs }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubContext;
