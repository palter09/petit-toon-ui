import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 컬렉션 생성 */
export async function createCollection(title, closed, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/collection/create`;

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const requestBody = {
    title: title,
    closed: closed
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}


/* 컬렉션 삭제 */
export async function deleteCollection(collectionId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/collection/${collectionId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}


/* 컬렉션 리스트 조회 */
export async function getCollections(userId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/collection/author/${userId}?${queryParams}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}