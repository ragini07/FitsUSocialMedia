import axios from "axios";

export const getAllUsersFromServer = () => {
    return axios.get("/api/users");
}

export const updateUserProfile = (token, userData) => {
    return axios.post(
      "/api/users/edit",
      {
        userData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };