import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../utils/getDate";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../features/userSlice";
import { setPostModal } from "../../features/postSlice";
import {
  likePost,
  disLikePost,
  bookmarkPost,
  removeBookmarkedPost,
  deletePost,
  editPost,
  addComment
} from "../../features/postSlice";

function SinglePost({ post }) {
  const [showOptions, setShowOptions] = useState(false);
  const  [comment ,setComment] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, content, username, comments, likes, createdAt, bookmark } = post;
  const { users, status } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const postedByUser = users?.find((e) => e.username === username);
  const { firstName, lastName, profilePhoto, userHandle } = postedByUser;
  const { date, month, year } = getDate(createdAt);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [user]);

  const isLiked = likes?.likedBy.some((e) => e.username === user.username);
  const isBoomarked = bookmark?.some((e) => e.username === user.username);
  const isUserPost = username === user.username;

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

  const bookmarkHandler = () => {
    isBoomarked
      ? dispatch(removeBookmarkedPost({ token: token, postId: _id }))
      : dispatch(bookmarkPost({ token: token, postId: _id }));
  };

  const deletePostHandler = () => {
    dispatch(deletePost({ token: token, postId: _id }));
  };

  const addCommentHandler = () => {
    if(comment)
      dispatch(addComment({token : token ,postId : _id,commentData : comment}))
    setComment("")
  }
  return (
    <>
      <div className="flex flex-col gap-4 bg-nav-background drop-shadow-2xl p-5 rounded-lg border-gray-base border-2 mt-4">
        <div className="flex gap-4  flex-grow">
          <img
            className="rounded-full h-12 w-12"
            src={profilePhoto}
            alt="post-hero"
          />
          <div className="flex justify-between flex-grow cursor-pointer">
            <div className="flex flex-col" onClick={navigateHandler}>
              <p className="text-xl">
                {firstName} {lastName}
              </p>
              <p className="text-xs text-txt-secondary-color">
                {`${month} ${date} ${year}`}
              </p>
            </div>
            {isUserPost && (
              <div className="relative">
                <svg
                  onClick={() => setShowOptions((prev) => !prev)}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="26"
                  height="26"
                  className="hover:bg-purple-500 rounded-full h-6 w-6 hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                  />
                </svg>
                {showOptions && (
                  <ul className="absolute z-20 top-4 right-5 px-2 py-1 bg-white rounded-lg border-gray-base border-2">
                    <li
                      className=" text-gray-600 text-sm my-1 flex items-center font-semibold hover:text-purple-700"
                      onClick={() => {
                        dispatch(setPostModal(post));
                        setShowOptions((prev) => !prev);
                      }}
                    >
                      <svg
                        className="pr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z" />
                          <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                        </g>
                      </svg>
                      Edit
                    </li>
                    <li
                      className="text-gray-600 text-sm flex items-center font-semibold hover:text-purple-700 my-1"
                      onClick={deletePostHandler}
                    >
                      <svg
                        className="pr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M21.5 6a1 1 0 0 1-.883.993L20.5 7h-.845l-1.231 12.52A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h5a3.5 3.5 0 1 1 7 0h5a1 1 0 0 1 1 1Zm-7.25 3.25a.75.75 0 0 0-.743.648L13.5 10v7l.007.102a.75.75 0 0 0 1.486 0L15 17v-7l-.007-.102a.75.75 0 0 0-.743-.648Zm-4.5 0a.75.75 0 0 0-.743.648L9 10v7l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-7l-.007-.102a.75.75 0 0 0-.743-.648ZM12 3.5A1.5 1.5 0 0 0 10.5 5h3A1.5 1.5 0 0 0 12 3.5Z"
                        />
                      </svg>
                      Delete
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-grow">
          <p>{content}</p>
          {/* <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1558236617-7d65d9dbcd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbGVicmF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="post-details"
                /> */}
        </div>
      
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
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={bookmarkHandler}
          >
            <i
              className={`fa fa-solid mr-1  ${
                isBoomarked ? "fa-bookmark" : "fa-bookmark-o"
              }`}
            ></i>
            <span>{isBoomarked ? "Bookmarked" : "Bookmark"}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <img className="h-8 w-8 rounded-full" src={user?.profilePhoto} />
          <div className="self-center w-full border-solid border border-gray-400 grow flex justify-start rounded-md px-2 py-1">
            <input
              className="focus:outline-none cursor-pointer grow "
              placeholder="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <button className="text-sm text-purple-500 cursor-pointer font-semibold hover:cursor-not-allowed ml-auto cursor-pointer"
            onClick={addCommentHandler}>
              Comment
            </button>
          </div>
        </div>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comments key={comment._id} comment={comment} postId = {_id} />
          ))}
      </div>
    </>
  );
}

export { SinglePost };
