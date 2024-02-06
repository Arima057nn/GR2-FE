"use client";

import { IconButton, TableCell, TableRow } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { RequestInterface } from "@/app/models/request";
import { CheckCircleOutline } from "@mui/icons-material";
import { requestApi } from "@/app/services/request-api";
import { AxiosError } from "axios";
import { useState } from "react";
import { formatDate } from "@/app/utils/formatDate";
import { formatStatus } from "@/app/utils/formatStatus";

const ItemAdminProcessing: React.FC<{
  item: RequestInterface;
}> = ({ item }) => {
  const [approve, setApprove] = useState(true);

  const handleChange = async (status: number) => {
    try {
      const res = await requestApi.changeStatusRequest(item._id, status);
      console.log(res);
      setApprove(false);
    } catch (e) {
      const error = e as AxiosError;
      // toast.error(error.message);
    }
  };
  return (
    <TableRow key={item._id}>
      <TableCell>{item._id}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
      <TableCell>{item.categoryId.name}</TableCell>
      <TableCell>{formatStatus(item.status)}</TableCell>

      <TableCell sx={{ display: "flex" }}>
        <IconButton
          aria-label="approve"
          size="large"
          onClick={() => handleChange(6)}
        >
          <CheckCircleOutline />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ItemAdminProcessing;
