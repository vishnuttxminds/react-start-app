import axiosInstance from "../api/axiosInstance";

export const getUsers = () => {
  return axiosInstance.get("/users");
};

export const createUser = (data) => {
  return axiosInstance.post("/users", data);
};
