//axios client configuration for reqresApi.
import axios from "axios";
// Here, set default's configuration for the client. (base, headers).
const ROOT_URL = "https://reqres.in/api/";
axios.defaults.baseURL = ROOT_URL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default axios;
