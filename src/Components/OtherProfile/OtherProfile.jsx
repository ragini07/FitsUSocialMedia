import { MenuBar, SuggestionBar } from "../index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserPosts } from "../../features/postSlice";
import { SinglePost } from "../Home/SinglePost";
import { followUser, unfollowUser } from "../../features/userSlice";

function OtherProfile() {
  const [showUserData, setShowUserData] = useState({});
  const { id } = useParams();

  const { users, status } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const { userPosts, allPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    let userData = users.find((e) => e.userHandle === id);
    setShowUserData(() => userData);
    dispatch(getUserPosts(userData?.username));
  }, [users, id, allPost]);

  // useEffect(()=>{

  // },[userPosts])
  const isFollowing = showUserData?.followers?.some(
    (e) => e.username === user.username
  );
  const followUnFollowHandler = () => {
    if (isFollowing)
      dispatch(
        unfollowUser({ token: token, id: showUserData._id, dispatch: dispatch })
      );
    else {
      dispatch(
        followUser({ token: token, id: showUserData._id, dispatch: dispatch })
      );
    }
  };

  return (
    <>
      <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          {/* profile */}
          <div className="flex flex-col">
            <div className="p-4 rounded-lg border-gray-base border-2">
              <div className="flex gap-4 grow items-start">
                <img
                  className="h-16 w-16 rounded-full"
                  src={showUserData.profilePhoto}
                  alt="profile-img"
                />

                <div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-lg">
                        {showUserData.firstName} {showUserData.lastName}{" "}
                      </div>
                      <div className="text-gray-400 text-sm">
                        @{showUserData.userHandle}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    {showUserData.bio}
                  </p>
                  <p className="text-blue-500 font-medium text-sm cursor-pointer">
                    {showUserData.portfolioURL}
                  </p>
                  <div className="flex text-gray-500 gap-10 mt-2">
                    <p>{userPosts.length} Post</p>
                    <p>
                      {showUserData.followers && showUserData.followers.length}{" "}
                      Followers
                    </p>
                    <p>
                      {showUserData.following && showUserData.following.length}{" "}
                      Following
                    </p>
                  </div>
                </div>
                <button
                  className="ring-2 ring-purple-500 bg-purple-500 m-2 py-1 px-2 hover:bg-purple-600 rounded-lg text-white ml-auto cursor-pointer"
                  onClick={followUnFollowHandler}
                >
                  {isFollowing ? "Unfollow" : "+Follow"}
                </button>
              </div>
            </div>

            {/* feed */}
            {/**Post-feed */}

            {userPosts.length > 0 ? (
              userPosts.map((post) => <SinglePost key={post._id} post={post} />)
            ) : (
              <div>No posts yet!</div>
            )}
          </div>
        </div>
        <SuggestionBar />
      </div>
    </>
  );
}

export { OtherProfile };
