"use client";

import { IconButton, TableCell, TableRow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ListAdmin } from "@/app/models/admin";

const ItemAdminList: React.FC<{
  item: ListAdmin;
}> = ({ item }) => {
  return (
    <TableRow key={item.name}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.content}</TableCell>
      <TableCell>{item.duedate}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell sx={{ display: "flex" }}>
        <IconButton aria-label="delete" size="large">
          <CheckIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <CloseIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ItemAdminList;
