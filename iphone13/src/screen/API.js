import React from "react";

{/* 팔로우 등록 */}
{/* const csrfToken = 'z9Gm1qTCobyykm3Zxmv50wcAmu4Cj9xxeLM_tafNvFYochoF-7PFspb6kd6fo1Xp8kbN62E3t49gvOxcHtVejZf43TAaRn81'; */}
async function followUser(followerId, followeeId, csrfToken) {
  const url = `http://localhost:8080/api/v1/follow/${followerId}/${followeeId}`;
  
  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`User ${followeeId} is now being followed by user ${followerId}.`);
    } else {
      console.error(`Failed to follow user: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 팔로우 목록 조회 */}
{/* const csrfToken = 'ZODshBpaEu5RDIhtsmTP5sOSDJNfRPRebyeofeO8Zg_1vfcwB4Xb5ixtItx8Ob4Lh0n71PKkIfFoIMBzXxTJTNeOV23BiJYC'; */}
async function getFollowers(userId, page, size, csrfToken) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `http://localhost:8080/api/v1/follow/${userId}?${queryParams.toString()}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      const followUsers = responseData.followUsers;

      console.log(`Followers of user ${userId}:`);
      followUsers.forEach(followUser => {
        const user = followUser.user;
        console.log(`- Follow ID: ${followUser.followId}`);
        console.log(`  User ID: ${user.id}`);
        console.log(`  Nickname: ${user.nickname}`);
        console.log(`  Tag: ${user.tag}`);
        console.log(`  Profile Image URL: ${user.profileImagePath}`);
        console.log(`  Status Message: ${user.statusMessage}`);
      });
    } else {
      console.error(`Failed to fetch followers: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 팔로우 삭제 */}
{/* const csrfToken = 'Ye7gHlhznH0S0z8ta1P4YjGpwuvcFmUUrkY9oGp-O003tsScUYyEKzsVq0g_sFoeWH7MVQOR74rvJ105nCAFkVtKXX4HjvP6'; */}
async function deleteFollower(followId, csrfToken) {
  const url = `http://localhost:8080/api/v1/follow/${followId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`Follower with ID ${followId} has been deleted.`);
    } else {
      console.error(`Failed to delete follower: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 웹툰 등록 */}
{/* const csrfToken = 'wMp5DKxlo82ylLlSxmd_kcBfn5IEtEOyY4PluMxvYMgWhKkY9KtJOZpVl_ufoYhjo0pLoqFusqpngSafB7Pc3PQOUfgv4s96'; */}
async function registerWebtoon(csrfToken, imageFiles) {
  const url = 'http://localhost:8080/api/v1/toon';

  const formData = new FormData();
  formData.append('toonImages', imageFiles[0], 'sample1.png');
  formData.append('toonImages', imageFiles[1], 'sample2.png');

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'POST',
    headers: headers,
    body: formData
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log('Webtoons registered successfully.');
    } else {
      console.error(`Failed to register webtoons: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 웹툰 삭제 */}
{/* const csrfToken = 'qhLYmf_Qp769e3J2lecJ_EbG4IOweYpldVPCfIxDBrPd3uVeknG6-J3pxN-QSBdE98o9mn_-zbqIS-5IFGD0T7ggYIO569Vt'; */}
async function deleteWebtoon(toonId, csrfToken) {
  const url = `http://localhost:8080/api/v1/toon/${toonId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'DELETE',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`Webtoon with ID ${toonId} has been deleted.`);
    } else {
      console.error(`Failed to delete webtoon: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 웹툰 정보 조회 */}
{/* const csrfToken = 'UQuY2Zt7NIyhNqqyPyusogvrS6giEUe55rndz_5KBGu56PuzMzv7vfoaA7WMAs7UDAaYlTuNZpFDI3CU14jrqsh_PFqN0Z-B'; */}
async function getWebtoonInfo(toonId, csrfToken) {
  const url = `http://localhost:8080/api/v1/toon/${toonId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const webtoonInfo = await response.json();

      console.log('Webtoon Information:');
      console.log(`- Toon ID: ${webtoonInfo.id}`);
      console.log(`- Title: ${webtoonInfo.title}`);
      console.log(`- Description: ${webtoonInfo.description}`);
      console.log(`- Author: ${webtoonInfo.author}`);
      console.log(`- Profile Image URL: ${webtoonInfo.profileImageUrl}`);
      console.log(`- Thumbnail URL: ${webtoonInfo.thumbnailUrl}`);
      console.log('- Image Paths:');
      webtoonInfo.imagePaths.forEach((imagePath, index) => {
        console.log(`  ${index + 1}: ${imagePath}`);
      });
      console.log(`- View Count: ${webtoonInfo.viewCount}`);
      console.log(`- Like Count: ${webtoonInfo.likeCount}`);
      console.log(`- Like Status: ${webtoonInfo.likeStatus}`);
    } else {
      console.error(`Failed to fetch webtoon information: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 웹툰 조회수 상승 */}
{/* const csrfToken = 'tp5-21ulOHZlty8FoYHAZD4kL4V3hW47caEeLVctLMeWC6jNgPtKvzjHXRJI00wzw6z0AFxGAuRD41YWE5R9GmFIT6X3bs6r'; */}
async function increaseViewCount(toonId, csrfToken) {
  const url = `http://localhost:8080/api/v1/toon/${toonId}/view`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`View count for webtoon with ID ${toonId} has been increased.`);
    } else {
      console.error(`Failed to increase view count: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 검색 */}
{/* const csrfToken = 'lZRIrNReva4P3d7K2WmdzvFQ8NSP7Xe1XaNFA2bcnW6Qh0Yvp_F7lLE8iMwiu-uruESp-pAy3bW5iEGYOMYjM1Dur1zytCcW'; */}
async function search(keyword, page, size, csrfToken) {
  const queryParams = new URLSearchParams({
    keyword: keyword,
    page: page,
    size: size
  });

  const url = `http://localhost:8080/api/v1/search?${queryParams.toString()}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('Users:');
      responseData.users.forEach(user => {
        console.log(`- User ID: ${user.id}`);
        console.log(`  Nickname: ${user.nickname}`);
        console.log(`  Tag: ${user.tag}`);
        console.log(`  Profile Image Path: ${user.profileImagePath}`);
        console.log(`  Status Message: ${user.statusMessage}`);
      });

      console.log('Toons:');
      responseData.toons.forEach(toon => {
        console.log(`- Toon ID: ${toon.id}`);
        console.log(`  Title: ${toon.title}`);
        console.log(`  Description: ${toon.description}`);
        console.log(`  Author: ${toon.author}`);
        console.log(`  Profile Image URL: ${toon.profileImageUrl}`);
        console.log(`  Thumbnail URL: ${toon.thumbnailUrl}`);
        console.log(`  Image Paths: ${toon.imagePaths.join(', ')}`);
        console.log(`  View Count: ${toon.viewCount}`);
        console.log(`  Like Count: ${toon.likeCount}`);
        console.log(`  Like Status: ${toon.likeStatus}`);
      });
    } else {
      console.error(`Failed to search: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 좋아요 */}
{/* const csrfToken = '_mLvc7qkG96pnhUQ1MshEZSzA9jFjXP-2u3LRUzMLK-SkbyTz1fbEdudLb2EqCRyseYVI6fVLrqjvRLTvNT4cXSvGcnw84-m'; */}
async function likeWebtoon(userId, toonId, csrfToken) {
  const url = `http://localhost:8080/api/v1/like/${userId}/${toonId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`User ${userId} has liked webtoon ${toonId}.`);
    } else {
      console.error(`Failed to like webtoon: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 싫어요 */}
{/* const csrfToken = 'IoeDvn4ZHIfS7eE5MLR8snNxBdPThDWtDwh_wonASthy1WcOErfljUp6Jeb_3YIMVplIhxcUKOuytFeAPWpH8LH3erpB7QQ8'; */}
async function dislikeWebtoon(userId, toonId, csrfToken) {
  const url = `http://localhost:8080/api/v1/dislike/${userId}/${toonId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`User ${userId} has disliked webtoon ${toonId}.`);
    } else {
      console.error(`Failed to dislike webtoon: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 로그인 */}
{/* const csrfToken = 'FE37WsYy3g-FT3ZOcMcB9VZkOWm-VODCD06B-xYrDCMGXFcaIyzJP_BXvzaodhV7Feo1zDcAFAuIYIPvOnfgmSYeP0ZiZGZ-'; */}
async function loginUser(email, password, csrfToken) {
  const url = 'http://localhost:8080/api/v1/login';

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/json;charset=UTF-8'
  });

  const requestBody = {
    email: email,
    password: password
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('Access Token:', responseData.accessToken);
      console.log('Refresh Token:', responseData.refreshToken);
    } else {
      console.error(`Failed to log in: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 토큰 재발행 */}
{/* const csrfToken = '0cilVAQ8hoklEdUVAlJ96jLRTP4J4oXl47tzzBI88dIEUMimt_-TY2ZYtuwIIOIgYH9J2gXkYZ8507zIhtpG_CcMkuthYv-Q'; */}
async function reissueToken(refreshToken, csrfToken) {
  const url = 'http://localhost:8080/api/v1/token/reissue';

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/json;charset=UTF-8'
  });

  const requestBody = {
    refreshToken: refreshToken
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('New Access Token:', responseData.accessToken);
      console.log('New Refresh Token:', responseData.refreshToken);
    } else {
      console.error(`Failed to reissue tokens: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 회원가입 */}
{/* const csrfToken = 'D0DDkkL0Wmf4RBNIaa5l3HwSqwIwWF30D6uE3beEJWxFS7qrOXGnoifCbgPVJXd-DYNR6EUrhjtUamTZPpyx74PlQVp9ft-f'; */}
async function signupUser(name, nickname, tag, email, password, csrfToken) {
  const url = 'http://localhost:8080/api/v1/signup';

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/json;charset=UTF-8'
  });

  const requestBody = {
    name: name,
    nickname: nickname,
    tag: tag,
    email: email,
    password: password
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('User ID:', responseData.userId);
    } else {
      console.error(`Failed to signup: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 유저 정보 조회 */}
{/* const csrfToken = 'sPhSoSNTYpKWqg3PABylmjXAQPw2dyYJDMnJ9Y6_784tP66VhsE2lhFnAaq7nD3-ODGR_w34bZ5TT0ckb_38wL6G3fkcXJzx'; */}
async function getUserInfo(userId, csrfToken) {
  const url = `http://localhost:8080/api/v1/user/${userId}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken
  });

  const options = {
    method: 'GET',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('User Information:');
      console.log(`- User ID: ${responseData.id}`);
      console.log(`- Nickname: ${responseData.nickname}`);
      console.log(`- Tag: ${responseData.tag}`);
      console.log(`- Profile Image Path: ${responseData.profileImagePath}`);
      console.log(`- Status Message: ${responseData.statusMessage}`);
    } else {
      console.error(`Failed to get user information: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

{/* 유저 태그 중복 검사 */}
{/* const csrfToken = 'mdel4zZBIqXXhoG69Kn_p5x7QFqOPOQuF5jbGoFzoCw78WXp-uGR2gYnFpb657DYw4TLlPhNbTvqDdIDIPnvL7JHlhgPwVCN'; */}
async function checkTagDuplication(tag, csrfToken) {
  const url = `http://localhost:8080/api/v1/user/${tag}`;

  const headers = new Headers({
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const options = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log('Tag Exist:', responseData.tagExist);
    } else {
      console.error(`Failed to check tag duplication: ${response.statusText}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}