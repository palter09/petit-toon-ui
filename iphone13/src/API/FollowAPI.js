import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 팔로우 등록 */
export async function followUser(followeeId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followeeId}`;
  
  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 유저가 팔로우하는 목록 조회 */
export async function getFollowings(userId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${userId}/following?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 유저를 팔로우하는 목록 조회 */
export async function getFollowers(userId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${userId}/followed?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 팔로우 삭제 */
export async function deleteFollower(followeeId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followeeId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}