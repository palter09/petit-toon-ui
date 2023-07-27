const express = require("express");
const app     = express();
const PORT    = 5000; // 포트번호 설정

// Assume you have a function to fetch the image data from the database
const getImageDataFromDB = require('./getImageDataFromDB');

app.get('/api/image/:imageId', async (req, res) => {
  const imageId = req.params.imageId;
  const imageData = await getImageDataFromDB(imageId);
  res.send(imageData);
});

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});