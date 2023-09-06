import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

export async function searchToon(keyword, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    keyword: keyword,
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/search/toon?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

export async function searchUser(keyword, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    keyword: keyword,
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/search/user?${queryParams.toString()}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'GET',
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}
