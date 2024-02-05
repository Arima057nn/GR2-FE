"use client";

import { TableCell, TableRow } from "@mui/material";
import { RequestInterface } from "@/app/models/request";

const ItemUserList: React.FC<{
  item: RequestInterface;
  key: number;
}> = ({ item, key }) => {
  return (
    <TableRow key={key}>
      <TableCell>{key}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.content}</TableCell>
      <TableCell>{item.createdAt}</TableCell>
      <TableCell>{item.categoryId.name}</TableCell>
      <TableCell>{item.status}</TableCell>
    </TableRow>
  );
};

export default ItemUserList;
