const LocalStorageService = (function () {
  function setToken(tokenObj: any) {
    localStorage.setItem(`access_token`, tokenObj.access_token);
    localStorage.setItem(`refresh_token`, tokenObj.refresh_token);
  }

  function getAccessToken() {
    return localStorage.getItem(`access_token`);
  }

  function getRefreshToken() {
    return localStorage.getItem(`refresh_token`);
  }

  function clearToken() {
    localStorage.removeItem(`access_token`);
    localStorage.removeItem(`refresh_token`);
  }

  return {
    setToken: setToken,
    getAccessToken: getAccessToken,
    getRefreshToken: getRefreshToken,
    clearToken: clearToken,
  };
})();
export default LocalStorageService;
