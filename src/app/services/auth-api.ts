import { LoginPayload } from "../models/auth";
import { axiosClient } from "./axios-cilent";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post(`/user/login`, payload);
  },
};
