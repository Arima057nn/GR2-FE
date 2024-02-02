import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ItemManagerList from "@/app/components/itemManagerList";
import { ListManager } from "@/app/models/manager";

function createData(
  id: string,
  name: string,
  content: number,
  duedate: string,
  category: number,
  status: number
) {
  return { id, name, content, duedate, category, status };
}

const rows = [
  createData("1", "Frozen yoghurt", 159, "6.0", 24, 4.0),
  createData("2", "Ice cream sandwich", 237, "9.0", 37, 4.3),
  createData("3", "Eclair", 262, "16.0", 24, 6.0),
  createData("4", "Cupcake", 305, "3.7", 67, 4.3),
  createData("5", "Gingerbread", 356, "16.0", 49, 3.9),
];

export default function List() {
  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-xl font-bold my-4">List Request</p>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#3887BE" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Id</TableCell>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Content</TableCell>
              <TableCell sx={{ color: "#fff" }}>Due Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Category</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ListManager) => (
              <ItemManagerList item={row} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
