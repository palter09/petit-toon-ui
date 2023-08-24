import { getCookie } from "./HandleTokens.js";
import { fetchAPIAndExecute } from "./APIFetcher.js";

/* 좋아요 */
/* const csrfToken = '_mLvc7qkG96pnhUQ1MshEZSzA9jFjXP-2u3LRUzMLK-SkbyTz1fbEdudLb2EqCRyseYVI6fVLrqjvRLTvNT4cXSvGcnw84-m'; */
export async function likeWebtoon(userId, toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/like/${userId}/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 싫어요 */
/* const csrfToken = 'IoeDvn4ZHIfS7eE5MLR8snNxBdPThDWtDwh_wonASthy1WcOErfljUp6Jeb_3YIMVplIhxcUKOuytFeAPWpH8LH3erpB7QQ8'; */
export async function dislikeWebtoon(userId, toonId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/dislike/${userId}/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}