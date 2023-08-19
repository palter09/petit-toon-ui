/* 좋아요 */
/* const csrfToken = '_mLvc7qkG96pnhUQ1MshEZSzA9jFjXP-2u3LRUzMLK-SkbyTz1fbEdudLb2EqCRyseYVI6fVLrqjvRLTvNT4cXSvGcnw84-m'; */
export async function likeWebtoon(userId, toonId, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/like/${userId}/${toonId}`;

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

/* 싫어요 */
/* const csrfToken = 'IoeDvn4ZHIfS7eE5MLR8snNxBdPThDWtDwh_wonASthy1WcOErfljUp6Jeb_3YIMVplIhxcUKOuytFeAPWpH8LH3erpB7QQ8'; */
export async function dislikeWebtoon(userId, toonId, csrfToken) {
  const url = `${process.env.REACT_APP_SERVER_IP}/api/v1/dislike/${userId}/${toonId}`;

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