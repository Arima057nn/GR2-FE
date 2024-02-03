import { axiosClient } from "./axios-cilent";

export const categoryApi = {
  getCategories() {
    return axiosClient.get(`/category`);
  },
};
