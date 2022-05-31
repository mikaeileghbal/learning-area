import Axios from "axios";
import { RestUrls } from "./Urls";

function SendRequest(method, url) {
  return Axios.request({ method, url });
}

export default function RestDataSource(dataType) {
  return SendRequest("get", RestUrls[dataType]);
}
