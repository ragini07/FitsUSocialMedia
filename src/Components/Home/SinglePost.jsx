import React from "react";
import { Comments } from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../utils/getDate";
import { useNavigate } from "react-router-dom";
import { likePost, disLikePost } from "../../features/postSlice";

function SinglePost({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, content, username, comments, likes, createdAt } = post;
  const { users, status } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const postedByUser = users?.find((e) => e.username === username);
  const { firstName, lastName, profilePhoto, userHandle } = postedByUser;
  const { date, month, year } = getDate(createdAt);

  const isLiked = likes.likedBy.some((e) => e.username === user.username);
  const navigateHandler = () => {
    userHandle === user.userHandle
      ? navigate("/userprofile")
      : navigate(`/otherprofile/${userHandle}`);
  };

  const likeDisLikePostHandler = () => {
    isLiked
      ? dispatch(disLikePost({ token: token, postId: _id }))
      : dispatch(likePost({ token: token, postId: _id }));
  };
  return (
    <>
      <div className="flex flex-col gap-4 bg-nav-background drop-shadow-2xl p-5 rounded-lg border-gray-base border-2 mt-4">
        {/** post header */}
        <div className="flex gap-4  flex-grow">
          <img
            className="rounded-full h-12 w-12"
            src={profilePhoto}
            alt="post-hero"
          />
          <div
            className="flex justify-between flex-grow cursor-pointer"
            onClick={navigateHandler}
          >
            <div className="flex flex-col">
              <p className="text-xl">
                {firstName} {lastName}
              </p>
              <p className="text-xs text-txt-secondary-color">
                {`${month} ${date} ${year}`}
              </p>
            </div>
            <i className="ri-more-fill text-xl cursor-pointer"></i>
          </div>
        </div>
        {/**Post details */}
        <div className="flex flex-col gap-2 flex-grow">
          <p>{content}</p>
          {/* <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1558236617-7d65d9dbcd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbGVicmF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="post-details"
                /> */}
        </div>
        {/**Post footer */}
        <div className="flex gap-4 flex-grow py-1  items-center justify-evenly font-normal text-txt-secondary-color">
          <div
            className="flex items-center  gap-1 cursor-pointer"
            onClick={likeDisLikePostHandler}
          >
            <i
              className={`fa mr-1 fa-solid ${
                isLiked ? "fa-heart" : "fa-heart-o"
              }`}
            ></i>
            <span>
              {likes.likeCount > 0
                ? likes.likeCount === 1
                  ? "1 Like"
                  : `${likes.likeCount} Likes`
                : "Like"}
            </span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <i className="fa fa-bookmark-o fa-solid mr-1"></i>
            <span>Bookmark</span>
          </div>
        </div>

        <div className="flex gap-3">
          <img className="h-8 rounded-full" src={user.profilePhoto} />
          <div className="self-center w-full border-solid border border-gray-400 grow flex justify-start rounded-md px-2 py-1">
            <input
              className="grow focus:outline-none cursor-pointer"
              placeholder="post comment"
            ></input>
            <button className="text-sm text-purple-500 cursor-pointer font-semibold hover:cursor-not-allowed ml-auto cursor-pointer">
              Comment
            </button>
          </div>
        </div>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comments key={comment._id} comment={comment} />
          ))}
      </div>
    </>
  );
}

export { SinglePost };
