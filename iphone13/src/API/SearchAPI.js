import { getCookie, setCookie } from "./handleTokens.js";
import { reissueToken } from "./AuthentificationAPI.js";

/* 검색 */
/* const csrfToken = 'lZRIrNReva4P3d7K2WmdzvFQ8NSP7Xe1XaNFA2bcnW6Qh0Yvp_F7lLE8iMwiu-uruESp-pAy3bW5iEGYOMYjM1Dur1zytCcW'; */
export async function search(keyword, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    keyword: keyword,
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/search?${queryParams.toString()}`;

  const headers = new Headers({
     Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers,
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
    console.error(error);
  }
}
