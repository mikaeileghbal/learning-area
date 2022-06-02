import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {
  GetData = (dataType) => {
    console.log("inside RestDataSource");
    return this.SendRequest("get", RestUrls[dataType]);
  };

  SendRequest = (method, url) => Axios.request({ method, url });
}
