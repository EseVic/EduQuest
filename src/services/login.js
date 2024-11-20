import axios from "axios";
const BASE_URL = "https://inquirehub.onrender.com/api/login";

export const loginUser = async (credentials) => {
  const res = await axios.post(BASE_URL, credentials);
  return res.data;
};
