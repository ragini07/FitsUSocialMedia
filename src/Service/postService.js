import axios from "axios";

export const getAllPostsFromServer = () => {
  return axios.get("/api/posts");
};

export const getUserPostsFromServer = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

export const likePostService = (token, postId) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
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
    {},
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
    {},
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
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};
export const getBookmarkedPosts = (token) => {
  return axios.get("/api/users/bookmark/", {
    headers: {
      authorization: token,
    },
  });
};
export const createPostService = (token, postData) => {
  return axios.post(
    `/api/posts`,
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editPostService = (token, postData) => {
  return axios.post(
    `/api/posts/edit/${postData._id}`,
    {
      postData,
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
export const addCommentService = (token, postId, commentData) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
export const editCommentService = (token, postId, commentData, commentId) => {
  return axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
export const deleteCommentService = (token, postId, commentId) => {
  return axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });
};
