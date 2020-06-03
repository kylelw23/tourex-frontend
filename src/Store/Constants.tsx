// Main URL
const LOCAL_HOST_URL = "http://localhost:8080";

/******************************************************************************/
// Client Error codes
export const HTTP_400 = 400; //Bad request
export const HTTP_403 = 403; //Forbidden

// Server Error codes
export const HTTP_500 = 500; //Internal server error

/******************************************************************************/
// Authentication url, body and config.
export const AUTH_TOKEN_URL = LOCAL_HOST_URL + "/oauth/token";

export const AUTH_FORM_DATA = require("querystring").stringify({
  grant_type: "password",
  username: "testAdmin",
  password: "spring-security-oauth2-read-client-password1234",
  client_id: "spring-security-oauth2-read-write-client",
});

export const AUTH_TOKEN_USER_SIGN_IN = (userName: string, password: string) =>
  require("querystring").stringify({
    grant_type: "password",
    username: userName,
    password: password,
    client_id: "spring-security-oauth2-read-write-client",
  });

export const AUTH_USER_AND_PASS = {
  auth: {
    username: "spring-security-oauth2-read-write-client",
    password: "spring-security-oauth2-read-write-client-password1234",
  },
};

/******************************************************************************/
// Create new user account
export const CREATE_ACCOUNT_URL = LOCAL_HOST_URL + "/account";

export const USER_SIGN_UP = (
  name: string,
  email: string,
  password: string,
  mobile: string
) => {
  return {
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  };
};

export const POST_HEADER_JSON = {
  headers: {
    "Content-Type": "application/json",
  },
};
/******************************************************************************/
// Send query to find tours by search string or dates.
export const QUERY_TOUR = (query: string, date: boolean) => {
  return {
    params: {
      query: query,
      date: date,
    },
  };
};

/******************************************************************************/
// Urls
// prettier-ignore
export const TOUREX_ACCOUNT_TOUR_GUIDE_QUERY_URL = LOCAL_HOST_URL + "/account/tourguide/search?query=";
export const TOUREX_TOUR_QUERY_URL = LOCAL_HOST_URL + "/tour/search";
export const TOUREX_ACCOUNT_URL = LOCAL_HOST_URL + "/account";
export const TOUREX_TOUR_URL = LOCAL_HOST_URL + "/tour";
export const TOUREX_TOUR_GUIDE_URL = LOCAL_HOST_URL + "/tourguide";
