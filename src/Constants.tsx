export const AUTH_TOKEN_URL = "http://localhost:8080/oauth/token";

export const AUTH_FORM_DATA = require("querystring").stringify({
  grant_type: "password",
  username: "testAdmin",
  password: "spring-security-oauth2-read-client-password1234",
  client_id: "spring-security-oauth2-read-write-client",
});

export const AUTH_USER_AND_PASS = {
  auth: {
    username: "spring-security-oauth2-read-write-client",
    password: "spring-security-oauth2-read-write-client-password1234",
  },
};
