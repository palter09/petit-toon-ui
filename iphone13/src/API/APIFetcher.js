import { setCookie } from "./HandleTokens.js";
import { reissueToken } from "./AuthentificationAPI.js";

export async function fetchAPIAndExecute (url, options, callback, fallback) {
  try {
    let response = await fetch(url, options);

    if (response.status === 401){
      let reissueStatus = 0;
      await reissueToken(
        (token) => {setCookie("accessToken", token.accessToken, 30*60)},
        (_response) => { reissueStatus = _response.status}
      );
      if(reissueStatus) 
        fallback && fallback(response);
      else
        response = await fetch(url, options);
    }

    if (response.ok) {
      // 응답이 OK이지만 JSON 데이터가 있는지 확인
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        callback && callback(responseData);
      } else {
        // 정상 수행 되었음에도 JSON 데이터가 없는 경우 처리:ex) deleteWebtoon
        callback && callback(response.ok);
        return;
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}