import { getCookie } from "./handleTokens.js";
/*ToonAPI*/
/*
register Webtoon
*/
export async function registerWebtoon(
  userId,
  toonTitle,
  description,
  imageFiles,
  callback
) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon`;
  const formData = new FormData();

  formData.append("userId", userId);
  formData.append("title", toonTitle);
  formData.append("description", description);
  for (let i = 0; i < imageFiles.length; i++) {
    if (imageFiles[i] === "") break;
    // 이미지 URL을 Blob 객체로 변환
    const response = await fetch(imageFiles[i]);
    const blob = await response.blob();

    // Blob 객체를 FormData에 추가
    formData.append("toonImages", blob, `sample${i + 1}.png`);
  }

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: formData,
  };

  try {
    const response = await fetch(url, options);

    // ... formData.append("키이름", "값"); 생략

    for (let value of formData.values()) {
      console.log(value);
    }
    if (response.ok) {
      const responseData = await response.json();
      console.log(`Webtoon ${responseData.toonId} registered successfully.`);
      callback(responseData.toonId);
    } else {
      console.error(`Failed to register webtoon: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

/*
delete Webtoon
*/
export async function deleteWebtoon(toonId, callback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "DELETE",
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`Webtoon with ID ${toonId} has been deleted.`);
      callback(true);
    } else {
      console.error(`Failed to delete webtoon: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

/*
get Webtoon information
*/
export async function getWebtoonInfo(toonId, callback) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();

      console.log("Toons:");
      console.log(`- Toon ID: ${responseData.id}`);
      console.log(`  Title: ${responseData.title}`);
      console.log(`  Description: ${responseData.description}`);
      console.log(`  Author: ${responseData.author}`);
      console.log(`  Profile Image URL: ${responseData.profileImageUrl}`);
      console.log(`  Thumbnail URL: ${responseData.thumbnailUrl}`);
      console.log(`  Image Paths: ${responseData.imagePaths.join(", ")}`);
      console.log(`  View Count: ${responseData.viewCount}`);
      console.log(`  Like Count: ${responseData.likeCount}`);
      console.log(`  Like Status: ${responseData.likeStatus}`);

      callback(responseData);
    } else {
      console.error(
        `Failed to fetch webtoon information: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

/*
increase ViewCount
*/
export async function increaseViewCount(toonId) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/toon/${toonId}/view`;

  const headers = new Headers({
    Authorization: `Bearer ${getCookie("accessToken")}`,
  });

  const options = {
    method: "POST",
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(
        `View count for webtoon with ID ${toonId} has been increased.`
      );
    } else {
      console.error(`Failed to increase view count: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
