/* 팔로우 등록 */
/* const csrfToken = 'z9Gm1qTCobyykm3Zxmv50wcAmu4Cj9xxeLM_tafNvFYochoF-7PFspb6kd6fo1Xp8kbN62E3t49gvOxcHtVejZf43TAaRn81'; */
export async function followUser(followerId, followeeId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followerId}/${followeeId}`;
  
  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'POST',
    headers: headers,
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}

/* 팔로우 목록 조회 */
/* const csrfToken = 'ZODshBpaEu5RDIhtsmTP5sOSDJNfRPRebyeofeO8Zg_1vfcwB4Xb5ixtItx8Ob4Lh0n71PKkIfFoIMBzXxTJTNeOV23BiJYC'; */
export async function getFollowers(userId, page, size, callback, fallback) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${userId}?${queryParams.toString()}`;

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
export async function deleteFollower(followId, callback, fallback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  fetchAPIAndExecute(url, options, callback, fallback);
}