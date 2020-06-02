import axios from "axios";
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

/*******************************************************************************************/
// User sign out
export const userSignOut = (): Promise<boolean> => {
  // ): Promise<Response> => {
  return new Promise((resolve, reject) => {
    try {
      // let currentUser = JSON.stringify(localStorage.getItem("currentUser")); //will return null if nothing is set.
      localStorage.removeItem("currentUser");
      resolve(true);
    } catch (error) {
      resolve(false);
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

/*******************************************************************************************/
// User sign out
export const checkUser = (): Promise<boolean> => {
  // ): Promise<Response> => {
  return new Promise((resolve, reject) => {
    try {
      let currentUser = localStorage.getItem("currentUser");
      if (currentUser === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

/*******************************************************************************************/
// User sign out
export const grabUserToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      let currentUser = JSON.stringify(localStorage.getItem("currentUser"));
      if (localStorage.getItem("currentUser") !== null) {
        resolve(currentUser);
      } else {
        resolve("");
      }
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

/*******************************************************************************************/
// User sign in
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
          localStorage.setItem("currentUser", response.data.access_token);
          resolve(response.data.access_token);
          // resolve(true);
        })
        .catch((err) => {
          // console.log("Auth.tsx, function grabTourexAPIToken, api ERROR: " + error);
          resolve(err.request.status);
        });
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

/*******************************************************************************************/
// User sign up
export const userSignUp = (
  name: string,
  email: string,
  password: string,
  mobile: string
): Promise<any> => {
  // ): Promise<Response> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(
          Constants.CREATE_ACCOUNT_URL,
          Constants.USER_SIGN_UP(name, email, password, mobile),
          Constants.POST_HEADER_JSON
        )
        .then((response) => {
          resolve(true);
        })
        .catch((err) => {
          console.log(err.request.status == 400);
          resolve(err.request.status);
        });
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

// Maybe move all of these functions in another file.

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

export const fetchTourGuidesAsJSONDataByBearerTokenAndQuery = (
  query: string
): Promise<Object> => {
  return new Promise((resolve, reject) => {
    try {
      let token = localStorage.getItem("currentUser");
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios
        .get(
          Constants.TOUREX_ACCOUNT_TOUR_GUIDE_QUERY_URL,
          require("querystring").stringify({
            query: query,
          })
        )
        .then(
          (response) => {
            console.log(response.data);
            resolve(response.data);
          },
          (error) => {
            console.log("FAIL");
            console.log(error);
            resolve({});
          }
        );
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/
// Currently not in use
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
