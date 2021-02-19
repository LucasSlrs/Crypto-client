import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/crypto",
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}
export default {
  service,
  firstPage() {
    return service
      .get("/")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
