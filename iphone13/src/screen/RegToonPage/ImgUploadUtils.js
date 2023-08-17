
//imgRef를 통해 파일을 선택하고, FileReader를 사용하여 이미지 파일을 읽고, 
//읽은 데이터를 React 상태의 setImgFile 함수를 통해 업데이트
export const handleImageUpload = (imgRef, setImgFile) => {
  const file = imgRef.current.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setImgFile(reader.result);
  };
};

//미리보기 이미지 세팅용
export const toggleImagePreview = (previewVisible, setPreviewVisible, imgRef, setImgFile) => {
  if (previewVisible) {
    imgRef.current.value = ""; // 이미지 선택 초기화
    setImgFile(""); // 이미지 URL 초기화
  }
  setPreviewVisible(!previewVisible); // 미리보기 토글
};
