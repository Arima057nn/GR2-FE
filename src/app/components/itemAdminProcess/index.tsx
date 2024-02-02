"use client";

import { IconButton, TableCell, TableRow } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ProcessingAdmin } from "@/app/models/admin";

const itemAdminProcess: React.FC<{
  item: ProcessingAdmin;
}> = ({ item }) => {
  return (
    <TableRow key={item.name}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.content}</TableCell>
      <TableCell>{item.duedate}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>Comment</TableCell>

      <TableCell sx={{ display: "flex" }}>
        <IconButton aria-label="delete" size="large">
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default itemAdminProcess;
