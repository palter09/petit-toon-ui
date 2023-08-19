/* 웹툰 등록 */
/* const csrfToken = 'wMp5DKxlo82ylLlSxmd_kcBfn5IEtEOyY4PluMxvYMgWhKkY9KtJOZpVl_ufoYhjo0pLoqFusqpngSafB7Pc3PQOUfgv4s96'; */
export async function registerWebtoon(csrfToken, imageFiles) {
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

/* 웹툰 삭제 */
/* const csrfToken = 'qhLYmf_Qp769e3J2lecJ_EbG4IOweYpldVPCfIxDBrPd3uVeknG6-J3pxN-QSBdE98o9mn_-zbqIS-5IFGD0T7ggYIO569Vt'; */
export async function deleteWebtoon(toonId, csrfToken) {
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

/* 웹툰 정보 조회 */
/* const csrfToken = 'UQuY2Zt7NIyhNqqyPyusogvrS6giEUe55rndz_5KBGu56PuzMzv7vfoaA7WMAs7UDAaYlTuNZpFDI3CU14jrqsh_PFqN0Z-B'; */
export async function getWebtoonInfo(toonId, csrfToken) {
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

/* 웹툰 조회수 상승 */
/* const csrfToken = 'tp5-21ulOHZlty8FoYHAZD4kL4V3hW47caEeLVctLMeWC6jNgPtKvzjHXRJI00wzw6z0AFxGAuRD41YWE5R9GmFIT6X3bs6r'; */
export async function increaseViewCount(toonId, csrfToken) {
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
