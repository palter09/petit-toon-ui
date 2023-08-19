/* 로그인 */
/* const csrfToken = 'FE37WsYy3g-FT3ZOcMcB9VZkOWm-VODCD06B-xYrDCMGXFcaIyzJP_BXvzaodhV7Feo1zDcAFAuIYIPvOnfgmSYeP0ZiZGZ-'; */
export async function loginUser(email, password, csrfToken) {
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

/* 토큰 재발행 */
/* const csrfToken = '0cilVAQ8hoklEdUVAlJ96jLRTP4J4oXl47tzzBI88dIEUMimt_-TY2ZYtuwIIOIgYH9J2gXkYZ8507zIhtpG_CcMkuthYv-Q'; */
export async function reissueToken(refreshToken, csrfToken) {
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