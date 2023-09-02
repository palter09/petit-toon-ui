import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 북마크 생성 */
export async function addBookmark(collectionId, toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/collection/${collectionId}/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}


/* 북마크 삭제 */
export async function deleteBookmark(bookmarkId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/bookmark/${bookmarkId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}


/* 북마크 리스트 조회 */
export async function getBookmarks(collectionId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/collection/${collectionId}?${queryParams}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}