import { useEffect, useState } from "react";
import { MenuBar, SuggestionBar } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { SinglePost } from "../Home/SinglePost";
import LoaderImg from "../../assets/loader.gif";

function Bookmark() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const { allPost } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    const bookmarks = allPost.filter((post) =>
      post.bookmark.some((e) => e.username === user.username)
    );
    setBookmarkedPosts(() => bookmarks);
  }, [allPost]);

  return (
    <>
      <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          <div className="flex flex-col">
            <div className="p-3 rounded-lg bg-gray-200 text-center font-semibold">
              Bookmark
            </div>

            {loading ? (
              <div className="flex justify-center items-center">
                <img src={LoaderImg} className="h-40 w-40"></img>
              </div>
            ) : bookmarkedPosts.length > 0 ? (
              bookmarkedPosts.map((post) => (
                <SinglePost key={post._id} post={post} />
              ))
            ) : (
              <div>No BookMarks!!</div>
            )}
          </div>
        </div>
        <SuggestionBar />
      </div>
    </>
  );
}

export { Bookmark };
