import axios, { AxiosResponse } from "axios";
import * as Constants from "../../Store/Constants";

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

export const fetchUserTokenBySignIn = (
  username: string,
  password: string
): Promise<any> => {
  // ): Promise<Response> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(
          Constants.AUTH_TOKEN_URL,
          Constants.AUTH_TOKEN_USER_SIGN_IN(username, password),
          Constants.AUTH_USER_AND_PASS
        )
        .then((response) => {
          // return access_token
          // resolve(response.data.access_token);
          resolve(true);
        })
        .catch((err) => {
          // console.log("Auth.tsx, function grabTourexAPIToken, api ERROR: " + error);
          resolve(err.response.data.error_description);
        });
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

export const fetchTourAsJSONDataByBearerToken = (
  token: string
): Promise<JSON> => {
  return new Promise((resolve, reject) => {
    try {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios.get(Constants.TOUREX_TOUR_URL).then(
        (response) => {
          console.log(response.data);
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          resolve(error);
        }
      );
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

export const fetchTourGuideAsJSONDataByBearerToken = (
  token: string
): Promise<JSON> => {
  return new Promise((resolve, reject) => {
    try {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios.get(Constants.TOUREX_TOUR_GUIDE_URL).then(
        (response) => {
          console.log(response.data);
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          resolve(error);
        }
      );
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

export const fetchAccountAsJSONDataByBearerToken = (
  token: string
): Promise<JSON> => {
  return new Promise((resolve, reject) => {
    try {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios.get(Constants.TOUREX_ACCOUNT_URL).then(
        (response) => {
          console.log(response.data);
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          resolve(error);
        }
      );
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};
