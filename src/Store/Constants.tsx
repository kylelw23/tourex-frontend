// Main URL
const LOCAL_HOST_URL = "http://localhost:8080";

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
// Urls
export const TOUREX_ACCOUNT_URL = LOCAL_HOST_URL + "/account";
export const TOUREX_TOUR_URL = LOCAL_HOST_URL + "/tour";
export const TOUREX_TOUR_GUIDE_URL = LOCAL_HOST_URL + "/tourguide";
