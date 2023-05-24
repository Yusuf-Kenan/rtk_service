import axios from "axios";

export default function useApi() {
  axios.defaults.baseURL = "https://api.adoptez1artisan.com";

  const authToken = localStorage.getItem("token");
  if (authToken) {
    axios.defaults.headers.common = {
      Authorization: "Bearer " + authToken,
    };
  }

  return axios;
}
