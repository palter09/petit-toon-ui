import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 댓글 등록 */
export async function registerComment(toonId, content, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/comment/${toonId}`;
  
  const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${getCookie("accessToken")}`
  });
  const requestBody = {
    content: content
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 댓글 삭제 */
export async function deleteComment(commentId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/comment/${commentId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 웹툰 댓글 조회 */
export async function getCommentsOfToon(toonId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/comment/${toonId}?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 자신이 작성한 댓글 조회 */
export async function getMyComments(page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/comment/myComment?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

