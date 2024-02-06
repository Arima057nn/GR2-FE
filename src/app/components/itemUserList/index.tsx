"use client";

import { TableCell, TableRow } from "@mui/material";
import { RequestInterface } from "@/app/models/request";
import { formatDate } from "@/app/utils/formatDate";
import { formatStatus } from "@/app/utils/formatStatus";

const ItemUserList: React.FC<{
  item: RequestInterface;
  key: number;
}> = ({ item, key }) => {
  return (
    <TableRow key={key}>
      <TableCell>{key}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.content}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
      <TableCell>{item.categoryId.name}</TableCell>
      <TableCell>{formatStatus(item.status)}</TableCell>
    </TableRow>
  );
};

export default ItemUserList;
