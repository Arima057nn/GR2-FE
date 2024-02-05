"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import withManagerAuth from "@/app/components/withManagerAuth";
import { requestApi } from "@/app/services/request-api";
import { UserContext } from "@/app/contexts/UserContext";
import { RequestInterface } from "@/app/models/request";
import ItemManagerList from "@/app/components/itemManagerList";

function List() {
  const [requests, setRequests] = React.useState<RequestInterface[]>([]);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    let res = await requestApi.getRequestByManagerId(1);
    setRequests(res.data || []);
  };
  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-xl font-bold my-4">List Request</p>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#3887BE" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Id</TableCell>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Due Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Category</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(requests) &&
              requests.map((request: RequestInterface) => (
                <ItemManagerList key={request._id} item={request} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default withManagerAuth(List);
