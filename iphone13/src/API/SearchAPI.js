/* 검색 */
/* const csrfToken = 'lZRIrNReva4P3d7K2WmdzvFQ8NSP7Xe1XaNFA2bcnW6Qh0Yvp_F7lLE8iMwiu-uruESp-pAy3bW5iEGYOMYjM1Dur1zytCcW'; */
export async function search(keyword, page, size, csrfToken) {
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
