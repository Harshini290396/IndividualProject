import axios from "axios";

const API_URL = "http://localhost:8080/springmvc_user_reg_login_war_exploded2/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "getAllProducts");
};

export default {
  getPublicContent,
  getUserBoard,
};