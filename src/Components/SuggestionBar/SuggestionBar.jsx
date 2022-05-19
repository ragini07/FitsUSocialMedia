import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../features/userSlice";

function SuggestionBar() {
  const [suggestedUser, setSuggestedUser] = useState([]);
  const navigate = useNavigate();
  const { users, status } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllUsers());
    }
    let suggestions = users
      .filter((e) => e.username !== user.username)
      .filter((e) => !e.followers.some((e1) => e1._id === user._id));
    setSuggestedUser(() => suggestions);
  }, [users, status]);

  return (
    <div className="p-4 md:hidden border-2 rounded-lg sticky top-24 w-2/6 h-full">
      <div className="grid grid-cols-4 gap-1 mb-6 items-center">
        <div className="flex items-center justify-between col-span-1">
          <img className="rounded-full w-10 h-10 flex" src={user.profilePhoto}></img>
        </div>
        <div
          className="col-span-3 cursor-pointer"
          onClick={() => navigate("/userprofile")}
        >
          <p className="font-bold text-sm">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm">@{user.userHandle}</p>
        </div>
      </div>

      <div className="rounded flex flex-col">
        <div className="text-sm flex items-center align-items justify-between mb-2">
          <p className="font-bold text-gray-base">Suggestions for you</p>
        </div>
        <div className="mt-4 grid gap-5">
          {suggestedUser.length > 0 ? (
            suggestedUser.map(
              ({ firstName, lastName, userHandle, profilePhoto }) => {
                return (
                  <>
                    <div className="grid grid-cols-4 gap-1 mb-6 items-center" key={userHandle}>
                      <div className="flex items-center justify-between col-span-1">
                        <img
                          className="rounded-full w-12 flex"
                          src={profilePhoto}
                        ></img>
                      </div>
                      <div
                        className="col-span-3 cursor-pointer"
                        onClick={() => navigate(`/otherprofile/${userHandle}`)}
                      >
                        <p className="font-bold text-sm">
                          {firstName} {lastName}
                        </p>
                        <p className="text-sm">@{userHandle}</p>
                      </div>
                    </div>
                  </>
                );
              }
            )
          ) : (
            <div>No Suggestions</div>
          )}
        </div>
      </div>
    </div>
  );
}

export { SuggestionBar };
