import axios from "axios";
import * as Constants from "./Constants";
import LocalStorageService from "./LocalStorageService";

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
      console.log("USER IS SIGNING OUT, we now clear tokens");
      // let currentUser = JSON.stringify(localStorage.getItem("access_token")); //will return null if nothing is set.
      LocalStorageService.clearToken();
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
      let currentUser = LocalStorageService.getAccessToken();
      console.log("currentUser = " + currentUser);
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
          tokenHandler();
          LocalStorageService.setToken(response.data);
          resolve(LocalStorageService.getAccessToken());
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
          console.log(err.request.status === 400);
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

// Query to search for tour guides
export const fetchTourGuidesAsJSONDataByBearerTokenAndQuery = (
  query: string
): Promise<Object> => {
  return new Promise((resolve, reject) => {
    try {
      let token = localStorage.getItem("access_token");
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

// Query to search for tours
export const fetchToursAsJSONDataByBearerTokenAndQuery = (
  query: string,
  date: boolean
): Promise<Object> => {
  console.log("QUERY IS " + Constants.QUERY_TOUR(query, date));
  return new Promise((resolve, reject) => {
    try {
      let token = localStorage.getItem("access_token");
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios
        .get(Constants.TOUREX_TOUR_QUERY_URL, Constants.QUERY_TOUR(query, date))
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve({});
          }
        );
    } catch (error) {
      // console.log("Auth.tsx, function grabTourexAPIToken, try catch ERROR: " + error);
    }
  });
};

export const tokenHandler = () => {
  console.log("HAHAHAHA");
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = LocalStorageService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      // config.headers['Content-Type'] = 'application/json';
      console.log("config is ");
      console.log(config);
      return config;
    },
    (error) => {
      console.log("REJECTED 1");
      Promise.reject(error);
    }
  );

  //Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      console.log("RETURNING RESPONSE");
      console.log(response);
      return response;
    },
    function (error) {
      console.log("WE GOT AN ERROR ON RESPONSE HEADER = " + error);
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        originalRequest.url === Constants.AUTH_TOKEN_URL
      ) {
        console.log("ERROR WITH ORIG");
        // Redirect them somewhere????
        // router.push('/login');
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = LocalStorageService.getRefreshToken();
        console.log("ERROR WITH NOT ORIG");

        return axios
          .post(Constants.AUTH_TOKEN_URL, {
            refresh_token: refreshToken,
          })
          .then((res) => {
            if (res.status === 201) {
              console.log("ITS 201!");
              LocalStorageService.setToken(res.data);
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + LocalStorageService.getAccessToken();
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    }
  );
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
