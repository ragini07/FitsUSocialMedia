import heroImg from "../../assets/heroImg.PNG";
import logoLg from "../../assets/logo-lg.PNG";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validateCred, setValidateCred] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formData.email !== "" &&
      formData.password !== "" &&
      formData.email.includes("@") &&
      formData.password.length >= 8
    ) {
      dispatch(login(formData));
    } else {
      setValidateCred("Invalid Credential");
    }
  };
  const loginWithTestHandler = () => {
    setFormData((formData) => ({
      ...formData,
      email: "test@gmail.com",
      password: "Test@123",
    }));
  };
  return (
    <>
      {token ? (
        <Navigate to="/" replace />
      ) : (
        <div className="container flex mx-auto items-center h-screen max-w-2xl 3xl:max-w-3xl lg:justify-center">
          <div className="flex w-3/5 lg:hidden">
            <img src={heroImg} alt="hero image" />
          </div>
          <div className="flex flex-col w-2/5 lg:w-3/5 ">
            <div className="flex w-full justify-center items-center mx-3 my-4">
              <img src={logoLg} alt="logo image" />
            </div>
            <div className="text-center mx-3  w-full my-2 text-red-500">
              {validateCred}
            </div>
            <form action="#" className="form-data" onSubmit={submitHandler}>
              <div>
                <input
                  value={formData.email}
                  type="email"
                  placeholder="email"
                  className="text-sm focus:ring-1 focus:ring-purple-500 text-gray w-full mx-3 py-2 px-3 h2 border border-gray rounded mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="text-sm text-gray w-full mx-3 py-2 px-3 h2 border border-gray rounded mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <div
                  className="absolute right-0 top-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"
                      />
                      <path
                        fill="currentColor"
                        d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M1.75 8s2-4.25 6.25-4.25S14.25 8 14.25 8s-2 4.25-6.25 4.25S1.75 8 1.75 8z" />
                        <circle cx="8" cy="8" r="1.25" fill="currentColor" />
                      </g>
                    </svg>
                  )}
                </div>
              </div>

              <button className="bg-purple-500 text-white w-full rounded h-8 font-bold mx-3 py-1 px-3 my-3 hover:bg-purple-600">
                Login
              </button>
            </form>
            <button
              className="bg-purple-500 text-white w-full rounded h-8 font-bold mx-3 py-1 px-3 hover:bg-purple-600"
              onClick={loginWithTestHandler}
            >
              Enter Test Credential
            </button>
            <div className="text-center mx-3 py-2 px-3 w-full my-2">
              Dont have account?
              <span className="font-semibold hover:underline cursor-pointer">
                {" "}
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Login };
