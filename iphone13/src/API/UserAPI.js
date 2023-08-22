import { getCookie, setCookie } from "./handleTokens.js";
import { reissueToken } from "./AuthentificationAPI.js";

/* 회원가입 */
export async function signupUser(name, nickname, tag, email, password) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/signup`;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8'
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

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('User ID:', responseData.userId);
    } else {
      console.error(`Failed to signup: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
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

  try {
    let response = await fetch(url, options);

    if (response.status == 401){
      let reissueStatus = 0;
      await reissueToken(
        (token) => {setCookie("accessToken", token.accessToken, 30*60)},
        (_response) => {reissueStatus = _response.status}
      );
      if(reissueStatus) 
        throw Error(`reissueToken failed: ${reissueStatus}`);
      else
        response = await fetch(url, options);
    }

    if (response.ok) {
      const responseData = await response.json();
      callback && callback(responseData);
    } else {
      fallback && fallback(response);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

/* 유저 태그 중복 검사 */
export async function checkTagDuplication(tag, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/user/${tag}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('Tag Exist:', responseData.tagExist);
    } else {
      console.error(`Failed to check tag duplication: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}