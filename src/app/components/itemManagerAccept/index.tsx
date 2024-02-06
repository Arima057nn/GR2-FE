"use client";

import { IconButton, TableCell, TableRow } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { RequestInterface } from "@/app/models/request";
import { formatDate } from "@/app/utils/formatDate";
import { formatStatus } from "@/app/utils/formatStatus";

const ItemManagerAccept: React.FC<{
  item: RequestInterface;
}> = ({ item }) => {
  return (
    <TableRow key={item._id}>
      <TableCell>{item._id}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
      <TableCell>{item.categoryId.name}</TableCell>
      <TableCell>{formatStatus(item.status)}</TableCell>

      <TableCell sx={{ display: "flex" }}>
        <IconButton aria-label="delete" size="large">
          <RemoveRedEyeIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ItemManagerAccept;
