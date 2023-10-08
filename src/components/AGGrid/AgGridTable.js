import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useState } from "react";
import "./AgGridTable.css";
import { UseFetch } from "../../services/api";

const AGGridTableCls = (props) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "400px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
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
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

 

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-balham">
        <AgGridReact
          rowData={props.rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          // onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default AGGridTableCls;
