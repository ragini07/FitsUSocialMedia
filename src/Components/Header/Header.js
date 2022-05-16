import React from "react";
import smLogo from "../../assets/logo-smm.PNG";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { logOut } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const dispatch = useDispatch();

  return (
    <header className="h-16 bg-white border-b-2 border-purple-500 mb-8 px-5 sticky top-0">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <div className="flex justify-center w-28">
              <img src={smLogo}></img>
            </div>
          </div>

          {/* <input
    
          className="text-gray-700 border h-8 mt-3 border-gray-300 flex items-center align-items p-1 w-1/4 flex items-center align-items rounded focus:outline-none focus:ring-1 focus:ring-purple-500 lg:w-2/5 sm:hidden"
          type="text"
          placeholder="type to search"
        /> */}
          <div className="flex gap-2">
            <div className="text-gray-700 border-0 text-center flex flex-col items-center align-items cursor-pointer px-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : ""
                }
                to="/feed"
              >
                <svg
                  className="mt-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19Z"
                    class="clr-i-solid clr-i-solid-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
                    class="clr-i-solid clr-i-solid-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </NavLink>
              <div className="text-xs text-gray-400 pt-1">Feed</div>
            </div>

            <div className="text-gray-700 border-0 text-center flex flex-col items-center align-items cursor-pointer px-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : ""
                }
                to="/"
              >
                <svg
                  className="mt-4"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="22"
                  height="22"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"
                  />
                </svg>
              </NavLink>
              <div className="text-xs text-gray-400 pt-1">Explore</div>
            </div>
            <div className="text-gray-700 px-3 text-center flex items-center align-items flex-col cursor-pointer">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : ""
                }
                to="/bookmark"
              >
                <svg
                  className="mt-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
                  />
                </svg>
              </NavLink>
              <div className="text-xs text-gray-400 pt-1 font-thin font-light">
                BookMark
              </div>
            </div>

            <div
              className="text-gray-700 px-3 text-center flex flex-col items-center align-items cursor-pointer"
              onClick={() => dispatch(logOut())}
            >
              <svg
                className="mt-4"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="text-xs text-gray-400 pt-1">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
