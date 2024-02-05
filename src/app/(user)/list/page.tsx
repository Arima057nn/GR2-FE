"use client";
import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import withUserAuth from "@/app/components/withUserAuth";
import ItemUserList from "@/app/components/itemUserList";
import { requestApi } from "@/app/services/request-api";
import { UserContext } from "@/app/contexts/UserContext";
import { RequestInterface } from "@/app/models/request";

function ListRequest() {
  const [requests, setRequests] = React.useState<RequestInterface[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    let res = await requestApi.getRequestByUserId(user.userId);
    setRequests(res.data);
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
              <TableCell sx={{ color: "#fff" }}>Content</TableCell>
              <TableCell sx={{ color: "#fff" }}>Due Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Category</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request: RequestInterface, index: number) => (
              <ItemUserList key={index} item={request} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withUserAuth(ListRequest);
