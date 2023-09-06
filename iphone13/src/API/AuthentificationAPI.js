import { getCookie } from "./HandleTokens.js";

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

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      console.log('Access Token:', responseData.accessToken);
      console.log('Refresh Token:', responseData.refreshToken);

      callback && callback(responseData);
    } else {
      fallback && fallback(response);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
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

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      callback && callback(responseData)
    } else {
      fallback && fallback(response);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}