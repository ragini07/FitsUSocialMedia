import { MenuBar, SuggestionBar } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts, getAllPost } from "../../features/postSlice";
import { useEffect, useState } from "react";
import { SinglePost } from "../Home/SinglePost";

function Feed() {
  const [feed, setFeed] = useState([]);
  const [trending, setTrending] = useState(false);
  const [trendingFeed, setTrendingFeed] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { allPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [user]);
  useEffect(() => {
    const getFeedOfUser = allPost.filter(
      (post) => post.username === user.username
    );
    const getFeedOfOtherUsers = allPost.filter((post) =>
      user.following.some((e) => e.username === post.username)
    );

    setFeed(() => [...getFeedOfUser, ...getFeedOfOtherUsers]);
  }, [user, allPost]);

  const lastestPostHandler = () => {
    setTrending(false);
    setFeed((feed) =>
      [...feed].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  };
  const trendingPostHandler = () => {
    setTrending(true);
    const trendingPost = [...feed]
      .filter((e) => e.likes.likeCount > 0)
      .sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    setTrendingFeed(() => trendingPost);
  };
  return (
    <>
      <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          {/* post */}
          <div className="flex flex-col">
            <div className="p-3 rounded-lg bg-gray-200 text-center font-semibold">
              Feed
            </div>

            <div className="flex rounded-lg bg-gray-100 text-center font-medium my-3 justify-evenly">
              <div
                className="w-1/2 cursor-pointer p-2 hover:bg-purple-300 hover:text-white"
                onClick={lastestPostHandler}
              >
                Latest Posts
              </div>
              <div
                className="w-1/2 border-l-2 p-2  border-purple-600 cursor-pointer hover:bg-purple-300 hover:text-white"
                onClick={trendingPostHandler}
              >
                Trending
              </div>
            </div>

            {trending ? (
              trendingFeed.length > 0 ? (
                trendingFeed.map((post) => (
                  <SinglePost key={post._id} post={post} />
                ))
              ) : (
                <div>Likes Posts to see what's trending</div>
              )
            ) : feed.length > 0 ? (
              feed.map((post) => <SinglePost key={post._id} post={post} />)
            ) : (
              <div className="">No posts yet!</div>
            )}
          </div>
        </div>
        <SuggestionBar />
      </div>
    </>
  );
}

export { Feed };
