export const formatStatus = (status: number) => {
  if (status === 1) return "Pending";
  if (status === 2) return "Approved";
  if (status === 3) return "Rejected";
  if (status === 4) return "Denied";
  if (status === 5) return "Processing";
  if (status === 6) return "Completed";
  if (status === 7) return "Cancelled";
};
