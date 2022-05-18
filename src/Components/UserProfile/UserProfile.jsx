import { MenuBar, SuggestionBar } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../features/postSlice";
import { setProfileModal} from '../../features/userSlice'
import { updateUser } from "../../features/authSlice";
import { useEffect } from "react";
import { SinglePost } from "../Home/SinglePost";


function UserProfile() {
  const { users, status } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const { userPosts, allPost } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(user?.username));
  }, [user, allPost]);

  return (
    <>
      <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          <div className="flex flex-col">
            <div className="p-4 rounded-lg border-gray-base border-2">
              <div className="flex gap-4 grow items-start">
                <img
                  className="h-16 w-16 rounded-full"
                  src={user.profilePhoto}
                  alt="user-profile-img"
                />

                <div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-lg">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-gray-400 text-sm">
                        @{user.userHandle}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-semibold">{user.bio}</p>
                  <p className="text-blue-500 font-medium text-sm cursor-pointer">
                    {user.portfolioURL}
                  </p>
                  <div className="flex text-gray-500 gap-10 mt-2">
                    <p>{userPosts.length} Post</p>
                    <p>{user.followers.length} Followers</p>
                    <p>{user.following.length} Following</p>
                  </div>
                </div>
                <button className="ring-2 ring-purple-500 m-2 py-1 px-2 hover:bg-gray-200 rounded-lg text-gray-600 ml-auto cursor-pointer"
                onClick={() => dispatch(setProfileModal())}>
                  Edit
                </button>
              </div>
            </div>

            {userPosts.length > 0 ? (
              userPosts.map((post) => <SinglePost key={post._id} post={post} />)
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

export { UserProfile };
