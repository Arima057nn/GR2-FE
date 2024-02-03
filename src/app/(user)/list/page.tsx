"use client";
import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import withUserAuth from "@/app/components/withUserAuth";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "content",
    headerName: "Content",
    width: 250,
  },
  {
    field: "duedate",
    headerName: "Due Date",
    width: 120,
  },

  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 130,
  },
  {
    field: "derpartment",
    headerName: "Department",
    width: 130,
  },
];

const rows = [
  { id: 1, name: "Snow Jon", content: "Snow ", age: 14 },
  { id: 2, name: "Lannister Cersei", content: "Lannister ", age: 31 },
  { id: 3, name: "Lannister Jaime", content: "Lannister ", age: 31 },
  { id: 4, name: "Stark Arya", content: "Stark ", age: 11 },
  { id: 5, name: "Targaryen Daenerys", content: "Targaryen ", age: null },
  { id: 6, name: "Melisandre ken", content: "Melisandre ", age: 150 },
  { id: 7, name: "Clifford Ferrara", content: "Clifford ", age: 44 },
  { id: 8, name: "Frances Rossini", content: "Frances ", age: 36 },
  { id: 9, name: "Roxie Harvey", content: "Roxie ", age: 65 },
];

function ListRequest() {
  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-xl font-bold my-4">List Request</p>

      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default withUserAuth(ListRequest);
