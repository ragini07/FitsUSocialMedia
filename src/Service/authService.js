import axios from "axios";

export const loginUser = (email, password) => {
  return axios.post("/api/auth/login", {
    username: email,
    password: password,
  });
};

export const signUpUser = (firstName, lastName, email, password) => {
  return axios.post("/api/auth/signup", {
    username: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
};
