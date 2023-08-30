import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";
/*ToonAPI*/
/*
register Webtoon
*/
export async function registerWebtoon(
  userId,
  toonTitle,
  description,
  imageFiles,
  callback,
  fallback
) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon`;
  const formData = new FormData();

  formData.append("userId", userId);
  formData.append("title", toonTitle);
  formData.append("description", description);
  for (let i = 0; i < imageFiles.length; i++) {
    if (imageFiles[i] === "") break;
    // 이미지 URL을 Blob 객체로 변환
    const response = await fetch(imageFiles[i]);
    const blob = await response.blob();

    // Blob 객체를 FormData에 추가
    formData.append("toonImages", blob, `${toonTitle}-${i + 1}.png`);
  }

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: formData,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/*
delete Webtoon
*/
export async function deleteWebtoon(toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "DELETE",
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/*
get Webtoon information
*/
export async function getWebtoonInfo(toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/*
get User's Webtoon List
*/
export async function getWebtoons(userId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/user/${userId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}


/*
increase ViewCount
*/
export async function increaseViewCount(toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}/view`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "POST",
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}
