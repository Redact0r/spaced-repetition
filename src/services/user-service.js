import config from "../config";
import UserContext from "../contexts/UserContext";
import TokenService from "./token-service";

const UserService = {
  getUserData() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: { Authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default UserService;