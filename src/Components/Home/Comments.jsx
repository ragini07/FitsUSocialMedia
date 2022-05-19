import {useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteComment ,editComment} from "../../features/postSlice";

function Comments({ comment ,postId}) {
  const [showOptions, setShowOptions] = useState(false);
  const [showInput , setShowInput] = useState(false);
  const [commentTxt , setCommentText] = useState("")
  const { _id ,text, username } = comment;
  const { users } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const commentByUser = users?.find((e) => e.username === username);
  const { firstName, lastName, profilePhoto } = commentByUser;
  const dispatch = useDispatch()
  const isUserComment = username === user.username;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const deleteCommentHandler =() => {
    dispatch(deleteComment({ token: token, postId: postId ,commentId : _id}));
  }

  const editCommentHandler = () => {
    if(commentTxt){
      dispatch(editComment({token : token ,postId : postId,commentData : commentTxt ,commentId : _id}));
      setShowInput(prev => !prev)
    }
      
  }
  return (
    <>
      <div className="flex gap-3">
        <img className="h-8 w-8 rounded-full" src={profilePhoto} />
        <div className="w-full bg-gray-200 grow flex flex-col rounded-md px-2 py-1">
          <div className="flex justify-between">
          <p className="text-sm">
            {firstName} {lastName}
          </p>
          {isUserComment && (
              <div className="relative">
                <svg
                  onClick={() => setShowOptions((prev) => !prev)}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  className="hover:bg-purple-500 rounded-full h-6 w-6 hover:text-white cursor-pointer"
                >
                  <path
                    fill="currentColor"
                    d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                  />
                </svg>
                {showOptions && (
                  <ul className="absolute z-20 top-4 right-5 px-2 py-1 bg-white rounded-lg border-gray-base border-2">
                    <li
                      className=" text-gray-600 cursor-pointer text-sm my-1 flex items-center font-semibold hover:text-purple-700"
                      onClick={() => {
                        setShowInput((prev) => !prev)
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
                      className="text-gray-600 cursor-pointer text-sm flex items-center font-semibold hover:text-purple-700 my-1"
                      onClick={deleteCommentHandler}
                    >
                      <svg
                        className="pr-1 cursor-pointer"
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
          {
            showInput ? <><input
            className="focus:outline-none cursor-pointer grow self-center w-full text-sm border-solid border border-gray-400 grow flex justify-start rounded-md px-1"
            placeholder="comment"
            value={commentTxt}
            onChange={(e) => setCommentText(e.target.value)}
          ></input>
          <div className="flex justify-end text-sm px-2 pt-1">
          <button className="pr-3 text-red-500 cursor-pointer"
          onClick={() => setShowInput(prev => !prev)}>Cancel</button>
          <button className="text-purple-500 cursor-pointer"
          onClick={editCommentHandler}>Comment</button>
          </div>
         
          </> :   <p className="text-xs text-gray-500">{text}</p>
          }
        
        </div>
      </div>
    </>
  );
}

export { Comments };
