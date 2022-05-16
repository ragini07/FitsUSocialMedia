import axios from "axios";

export const getAllUsersFromServer = () => {
    return axios.get("/api/users");
}

export const followUserService = (token, userId) => {
    return axios.post(
      `/api/users/follow/${userId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  export const unFollowUserService = (token, userId) => {
    return axios.post(
      `/api/users/unfollow/${userId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
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