import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 로그인 */
export async function loginUser(email, password, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/login`;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8'
  });

  const requestBody = {
    email: email,
    password: password
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 토큰 재발행 */
export async function reissueToken(callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/token/reissue`;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8'
  });

  const requestBody = {
    refreshToken: getCookie("refreshToken"),
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}