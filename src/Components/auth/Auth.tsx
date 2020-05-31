import axios from "axios";
import * as Constants from "../../Constants";

export const fetchTourexAPIToken = (): Promise<Response> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(
          Constants.AUTH_TOKEN_URL,
          Constants.AUTH_FORM_DATA,
          Constants.AUTH_USER_AND_PASS
        )
        .then((response) => {
          // return access_token
          resolve(response.data.access_token);
        })
        .catch((err) => {
          // console.log("Auth.tsx, function grabTourexAPIToken, api ERROR: " + error);
          resolve(err);
        });
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};
