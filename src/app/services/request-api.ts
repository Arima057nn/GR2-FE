import { axiosClient } from "./axios-cilent";

export const requestApi = {
  createNewRequest(
    title: string,
    content: string,
    userId: string,
    status: number,
    categoryId: string
  ) {
    return axiosClient.post(`/request/create`, {
      title,
      content,
      userId,
      status,
      categoryId,
    });
  },
  getRequestByUserId(userId: string) {
    return axiosClient.get(`/request/user/${userId}`);
  },

  getRequestByManagerId(status: number) {
    return axiosClient.get(`/request/manager/${status}`);
  },
};
