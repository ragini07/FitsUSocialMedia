import { useEffect, useState } from "react";
import axios from "axios";
import { setProfileModal } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/authSlice";
// import {uploadImg} from '../../utils/uploadImg'

function ProfileModal() {
  const { user, token } = useSelector((state) => state.auth);
  const { profileModal } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const updateUserHandler = () => {
    dispatch(updateUser({ token: token, userData: userData }));
    dispatch(setProfileModal());
  };
  const changeProfileHandler = async (e) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "hx7spyzf");

      await fetch("https://api.cloudinary.com/v1_1/dby5tsl9b/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => setUserData({ ...userData, profilePhoto: json.url }))
        .catch((error) => console.log(error));

      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      {profileModal && (
        <>
          <div class="bg-black bg-opacity-60 fixed inset-0 justify-center items-center z-10">
            <div class="bg-white max-w-sm py-4 px-6 rounded shadow-xl text-gray-800 mx-auto my-40">
              <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-bold text-gray-700">Edit Profile</h4>
                <svg
                  class="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  onClick={() => dispatch(setProfileModal())}
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="mt-2 flex flex-col gap-4">
                <div className="flex gap-8 mb-2">
                  <div>Avatar</div>
                  {
                      !loading ? 
                      <div className="relative">
                    <img
                      className="h-14 w-14 rounded-full"
                      src={userData?.profilePhoto}
                      alt="profile-img"
                    />
                    <i className="fa-solid fa-camera text-white flex justify-center absolute right-0 top-8 cursor-pointer bg-purple-500 h-6 w-6 rounded-full z-10"></i>
                    <input
                      className="absolute top-8  right-0 w-6 opacity-0 z-10"
                      accept="image/gif, image/jpeg, image/png, image/jpg,image/webp"
                      type="file"
                      onChange={(e) => changeProfileHandler(e)}
                    />
                  </div> : 
                  <div>Loading..</div>
                  }
                  
                </div>
                <div className="flex gap-12 mb-2">
                  <div>Bio</div>
                  <input
                    className="pl-2 grow font-light bg-purple-300 px-1 py-0.5 rounded-sm focus:outline-none"
                    type="text"
                    value={userData?.bio}
                    onChange={(e) =>
                      setUserData({ ...userData, bio: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-3 mb-2">
                  <div className="">Website</div>
                  <input
                    className="pl-2 grow focus:outline-none font-light bg-purple-300 px-1 py-0.5 rounded-sm"
                    type="text"
                    value={userData?.portfolioURL}
                    onChange={(e) =>
                      setUserData({ ...userData, portfolioURL: e.target.value })
                    }
                  />
                </div>
              </div>
              <div class="mt-3 flex justify-end space-x-3 mt-2">
                <button
                  class="px-3 py-1 text-gray-200 bg-purple-500 hover:bg-purple-600 rounded"
                  onClick={updateUserHandler}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { ProfileModal };
