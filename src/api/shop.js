import axios from "axios";

export default axios.create({
  baseURL: "https://shop-e49cd-default-rtdb.firebaseio.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
