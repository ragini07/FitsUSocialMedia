import axios from "axios";

export const getAllPostsFromServer = () => {
    return axios.get("/api/posts");
}


export const getUserPostsFromServer = (username) => {
    console.log("server")
    return axios.get(`/api/posts/user/${username}`);
}

export const likePostService = (token, postId) => {
    return axios.post(
      `/api/posts/like/${postId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };

  export const disLikePostService = (token, postId) => {
    return axios.post(
      `/api/posts/dislike/${postId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };