import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 회원가입 */
export async function signupUser(name, nickname, tag, email, password, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/signup`;

  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const requestBody = {
    name: name,
    nickname: nickname,
    tag: tag,
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

/* 유저 정보 조회 */
export async function getUserInfo(userId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/user/${userId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 유저 태그 중복 검사 */
export async function checkTagDuplication(tag, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/user/${tag}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}