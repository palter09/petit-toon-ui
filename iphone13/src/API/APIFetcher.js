import { setCookie } from "./HandleTokens.js";
import { reissueToken } from "./AuthentificationAPI.js";

export async function fetchAPIAndExecute (url, options, callback, fallback) {
  try {
    let response = await fetch(url, options);

    if (response.status == 401){
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
      const responseData = await response.json();
      callback && callback(responseData);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}