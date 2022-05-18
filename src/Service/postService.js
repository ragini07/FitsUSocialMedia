import axios from "axios";

export const getAllPostsFromServer = () => {
    return axios.get("/api/posts");
}


export const getUserPostsFromServer = (username) => {
   
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

  export const addPostToBookmark = (token, postId) => {
    return axios.post(
      `/api/users/bookmark/${postId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  export const removePostFromBookmark = (token, postId) => {
    return axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {
        
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  export const getBookmarkedPosts = (token) => {
    return axios.get("/api/users/bookmark/",
    {
        headers: {
          authorization: token,
        },
      });
}
export const createPostService = (token, post) => {
    return axios.post(
      `/api/posts`,
      {
        post
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };

  export const editPostService = (token, post) => {
    return axios.post(
      `/api/posts/edit/${post._id}`,
      {
        post
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  export const deletePostService = (token, postId) => {
    return axios.delete(
      `/api/posts/${postId}`,
     
      {
        headers: {
          authorization: token,
        },
      }
    );
  };