/* 팔로우 등록 */
/* const csrfToken = 'z9Gm1qTCobyykm3Zxmv50wcAmu4Cj9xxeLM_tafNvFYochoF-7PFspb6kd6fo1Xp8kbN62E3t49gvOxcHtVejZf43TAaRn81'; */
export async function followUser(followerId, followeeId, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followerId}/${followeeId}`;
  
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

/* 팔로우 목록 조회 */
/* const csrfToken = 'ZODshBpaEu5RDIhtsmTP5sOSDJNfRPRebyeofeO8Zg_1vfcwB4Xb5ixtItx8Ob4Lh0n71PKkIfFoIMBzXxTJTNeOV23BiJYC'; */
export async function getFollowers(userId, page, size, csrfToken) {
  const queryParams = new URLSearchParams({
    page: page,
    size: size
  });

  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${userId}?${queryParams.toString()}`;

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

/* 팔로우 삭제 */
/* const csrfToken = 'Ye7gHlhznH0S0z8ta1P4YjGpwuvcFmUUrkY9oGp-O003tsScUYyEKzsVq0g_sFoeWH7MVQOR74rvJ105nCAFkVtKXX4HjvP6'; */
export async function deleteFollower(followId, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/follow/${followId}`;

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