import React, { useEffect, useState } from "react";
import styles from "./EditToonPage/styles/EditToonPage.module.css";
import Info from "./EditToonPage/Info";
import Title from "./EditToonPage/Title";
import Description from "./EditToonPage/Description";
import SwiperEditToon from "./EditToonPage/SwiperEditToon";
import FooterButton from "./EditToonPage/FooterButton";
import DeleteModal from "./EditToonPage/DeleteModal";
import EditModal from "./EditToonPage/EditModal";
import { useNavigate, useParams } from "react-router";
import { deleteImage, deleteWebtoon, editWebtoonInfo, getWebtoonInfo, insertImage } from "../API/ToonAPI";

/*deleteWebtoon은 FooterButton에서 수행*/

const EditToonPage = () => {
  const toonMaxLength = 10;
  const toonId = useParams().toonId;
  const navigate = useNavigate();
  const [originImgFiles, setOriginImgFiles] = useState([Array(toonMaxLength).fill("")]);//수정 전 이미지
  const [imgFiles, setImgFiles] = useState([Array(toonMaxLength).fill("")]);//수정 후 이미지
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [originTitle, setOriginTitle] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  useEffect(()=>{
    getWebtoonInfo(toonId,
      (data)=>{
        setTitle(data.title);
        setOriginTitle(data.title);
        setDescription(data.description);
        setOriginDescription(data.description);
        const newImgFiles = Array(10).fill("").map((_, index) => {
          if (index < data.imagePaths.length) {
            return data.imagePaths[index];
          }
          return "";
        });
        setOriginImgFiles(newImgFiles);
        setImgFiles(newImgFiles);
      })
  },[toonId])
  
/*만화 수정*/
const handleEditSubmit =  async () => {
  // 제목+설명 수정
  if (description !== originDescription || title !== originTitle) {
    editWebtoonInfo(
      toonId,
      title,
      description,
      () => {
        console.log("제목, 설명 수정 성공");
      },
      () => {
        console.log("제목, 설명 수정 실패");
      }
    );
  }
  // 이미지들 수정 : originImgFiles와 imgFiles를 비교하며 api호출, 서버에서 자동 정렬하는 것 반영: origin, edit
  const origin = {images: [...originImgFiles]};
  const edit = {images: [...imgFiles]};
  for (let i = 0; i < toonMaxLength; i++) {
    const originImg = origin.images[i];
    const editImg = edit.images[i];
    if (originImg === editImg) {
      continue;
    }
    else if (originImg !== "" && editImg === "") {
      await deleteImageAsync(i, origin, edit);
      i--;
    } else if (originImg === "" && editImg !== "") {
      await insertImageAsync(i);
    } else {
      await deleteImageAsync(i, origin, edit);
      await insertImageAsync(i);
    }
  }

  closeEditModal();
  navigate(-1);
}
 
const deleteImageAsync = async (index, origin, edit) => {
  //promise를 사용해야 비동기작업을 동기작업처럼 할 수 있음:api호출하고 작업 처리한 후에야 다음 index로 넘어가게
  return new Promise((resolve, reject) => {
    deleteImage(toonId, index,
      () => {
        console.log("delete성공", index);
        origin.images.splice(index,1);origin.images.push("");
        edit.images.splice(index,1);edit.images.push("");
        resolve();
      },
      () => {
        console.log("delete실패", index);
        origin.images.splice(index,1);origin.images.push("");
        edit.images.splice(index,1);edit.images.push("");
        reject();
      });
  });
};

const insertImageAsync = async (index) => {
  return new Promise((resolve, reject) => {
    insertImage(toonId, index, imgFiles[index],
      () => {
        console.log("insert성공", index);
        resolve();
      },
      () => {
        console.log("insert실패", index);
        reject();
      });
  });
};

  /*만화 삭제*/
  const handleDeleteToon = () =>{
    deleteWebtoon(toonId,
      ()=>{
        console.log("웹툰 삭제 성공:",toonId);
        navigate(-1);
      },
      ()=>{console.log("웹툰 삭제 실패:",toonId)}
    )
  }
  const handleTitle = (tmpValue)=>{
    setTitle(tmpValue);
  }
  const handleDescription = (descriptionValue) => {
    setDescription(descriptionValue);
  };

  const openDeleteModal = () => {
		setIsOpenDeleteModal(true);
	};
	const closeDeleteModal = () => {
		setIsOpenDeleteModal(false);
	};
  const openEditModal = () =>{
    setIsOpenEditModal(true);
  };
  const closeEditModal = () =>{
    setIsOpenEditModal(false);
  };

  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <div className={styles.header_wrapper}>
          <p>웹툰 수정/삭제 페이지</p>
        </div>
        <div className={styles.info_wrapper}>
          <Info title={title} toonId={toonId}/>
        </div>
        <div className={styles['title-wrapper']}>
          <Title title={title} handleTitle={handleTitle}/>
        </div>
        <div className={styles.description_wrapper}>
          <Description description={description} handleDescription={handleDescription} />
        </div>
        <div className={styles.ImagesUpload_wrapper}>
          <span>
            만화
            <br />
            이미지
          </span>
          <SwiperEditToon
            imgFiles={imgFiles}
            setImgFiles={setImgFiles}
            imgSize={"555 X 777"}
            inputId={"editToon-thumbnail"}
            inputName={"editToon-thumbnail-img"}
          />
        </div>
        <div className={styles.footer_wrapper}>
          <FooterButton id={toonId} isEnabled={false} onOpenDeleteModal={openDeleteModal} onOpenEditModal={openEditModal} />
        </div>
        {isOpenDeleteModal && (
          <DeleteModal isOpenModal={isOpenDeleteModal} onCloseModal={closeDeleteModal} onSubmit={handleDeleteToon}/>
			  )}
        {isOpenEditModal && (
				  <EditModal isOpenModal={isOpenEditModal} onCloseModal={closeEditModal} onSubmit={handleEditSubmit}/>
			  )}
      </div>
    </div>
  );
};

export default EditToonPage;
