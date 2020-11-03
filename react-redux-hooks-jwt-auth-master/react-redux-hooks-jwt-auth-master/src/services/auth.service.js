import axios from "axios";
import {API_BASE_URL} from './../constants/apiConstants';
//const API_URL = "http://localhost:8080/springmvc_user_reg_login_war_exploded2/";

const register = (username, email, password) => {
  return axios.post(API_BASE_URL + "registerUser", {
    username,
    password,
    email,
  });
};

const login = (username, password) => {
  return axios
    .post(API_BASE_URL + "loginUser", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
