/* 회원가입 */
/* const csrfToken = 'D0DDkkL0Wmf4RBNIaa5l3HwSqwIwWF30D6uE3beEJWxFS7qrOXGnoifCbgPVJXd-DYNR6EUrhjtUamTZPpyx74PlQVp9ft-f'; */
export async function signupUser(name, nickname, tag, email, password, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/signup`;

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

/* 유저 정보 조회 */
export async function getUserInfo(userId, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/user/${userId}`;

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

/* 유저 태그 중복 검사 */
/* const csrfToken = 'mdel4zZBIqXXhoG69Kn_p5x7QFqOPOQuF5jbGoFzoCw78WXp-uGR2gYnFpb657DYw4TLlPhNbTvqDdIDIPnvL7JHlhgPwVCN'; */
export async function checkTagDuplication(tag, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/user/${tag}`;

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