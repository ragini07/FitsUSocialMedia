import { MenuBar, SuggestionBar } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, createPost } from "../../features/postSlice";
import { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";
import { initialPostState } from "../../utils/constants";

function Home() {
  const [postData, setPostData] = useState(initialPostState);
  const { allPost } = useSelector((state) => state.post);
  const { user, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [allPost, user]);

  const createPostHandler = () => {
    dispatch(createPost({ token: token, post: postData }));
    setPostData(initialPostState);
  };
  return (
    <>
      <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          <div className="flex flex-col">
            <div className="p-4 rounded-lg border-gray-base border-2">
              <div className="flex flex-col gap-4 grow">
                <div className="flex items-center gap-4 grow">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={user?.profilePhoto}
                    alt="profile-img"
                  />
                  <input
                    className="grow  font-light focus:outline-none"
                    placeholder="Write your thoughts..."
                    type="text"
                    value={postData?.content}
                    onChange={(e) =>
                      setPostData({ ...postData, content: e.target.value })
                    }
                  />
                </div>
                <hr className="font-extralight text-secondary" />
                <ul className="flex gap-4 font-light items-center">
                  <li>
                    <i className=""></i>
                  </li>
                  <li>
                    <i className=""></i>
                  </li>
                  <button
                    className="cursor-pointer mb-4 mx-4 p-2 rounded-lg ml-auto bg-purple-500 hover:bg-purple-600 text-white"
                    onClick={createPostHandler}
                  >
                    Post
                  </button>
                </ul>
              </div>
            </div>

            {allPost.length > 0 &&
              allPost
                .map((post) => <SinglePost key={post._id} post={post} />)
                .reverse()}
          </div>
        </div>
        <SuggestionBar />
      </div>
    </>
  );
}

export { Home };
