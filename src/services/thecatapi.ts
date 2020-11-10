import axios from "axios";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": process.env.VUE_APP_API_KEY
  }
});
