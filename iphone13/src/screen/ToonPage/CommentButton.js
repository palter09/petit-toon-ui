import React, { useCallback, useEffect, useState } from 'react';
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from '../../hooks/useIconClick';
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';
import "./CommentButton.css";
import { GoPaperAirplane } from "react-icons/go";
import { RiCoinsFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { registerComment, getCommentsOfToon, deleteComment } from "../../API/CommentAPI.js";


const CommentButton = ({userId, toonId, isError}) => {
  const [myPageIsOpen, myRef, myPageToggleHandler] = useDetectClose(false);
  const [commentInput, setCommentInput] = useState("");
  const [observeTarget, setObserveTarget] = useState(false); // observe 상태 설정
  const [comments, setComments] = useState([]);
  const [pageComment, setPageComment] = useState(0);
  const {
    chatIconClicked,
    commentClicked,
    handleIconClick,
  } = useIconClick();

    /*댓글 데이터 가져오는 함수*/
   const fetchComments = useCallback(() => {
    getCommentsOfToon(
      toonId,
      pageComment,
      7,
      (data) => {
        if (data.comments.length !== 0) {
          setComments((prevComments) => {
            // 기존 댓글과 새로운 댓글을 합칠 때 중복 데이터를 제외하고 합침
            const newComments = data.comments.filter(
              (newComment) =>
                !prevComments.some(
                  (prevComment) => prevComment.commentId === newComment.commentId
                )
            );
            return [...prevComments, ...newComments];
          });
        }
      },
      () => {
        console.log("comment정보 불러오기 실패");
      }
    );
  }, [toonId, pageComment]);

  // 페이지 로드 시 댓글 데이터 가져오기
  useEffect(() => {
    fetchComments();
  }, [toonId, pageComment, fetchComments]);
  // comments업데이트마다 targetref 보임 유무 설정
  useEffect(()=>{
    if(comments.length !== 0 && comments.length % 7 === 0){
      setObserveTarget(true);
    }
  },[comments]);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentSubmit();
    }
  };
  const handleCommentSubmit = () => {
    if (commentInput.trim() !== "") {
      handleCreateComment(commentInput);
      setCommentInput("");
    }
  };
  const handleCommentDelete = (commentId) => {
    handleDeleteComment(commentId);
  };


  //커멘트 추가 로드
  const handleCommentIntersect = () => {
    setPageComment((prev) => prev + 1);
  };
  const options = {
    threshold : 0.3,//targetRef가 30% 보이면
    root: document.querySelector('.comment-section-container')//viewport
  }
  const { targetRef, observerRef } = useIntersectionObserver(
    options,
    ()=>{
      if(observeTarget){
        handleCommentIntersect();
        observerRef.current.unobserve(targetRef.current);
        setObserveTarget(false);
      }
    },
  );

  // 댓글 추가 함수
  const handleCreateComment = (content) => {
    registerComment(
      toonId,
      content,
      (data) => {
        if (data.commentId) {
          const newCommentId = data.commentId;
          if (!comments.some((comment) => comment.commentId === newCommentId)) {
            console.log("댓글 입력 성공");
            setComments((prevComments) => {
              const newComment = {
                commentId: newCommentId,
                userId: userId,
                content: content,
                myComment: true,
              };
              return [newComment, ...prevComments];
            });
          } else {
            console.log("이미 존재하는 댓글입니다.");
          }
        } else {
          console.log("댓글 데이터에 commentId가 없습니다.");
        }
      },
      () => {
        console.log("댓글 입력 실패");
      }
    );
  };

  // 댓글 삭제 함수
  const handleDeleteComment = (commentId) => {
    deleteComment(
      commentId,
      () => {
        console.log("댓글 삭제 성공");
        setComments((prevComments) => {
          const filteredComments = prevComments.filter(
            (comment) => comment.commentId !== commentId
          );
          return filteredComments;
        });
      },
      () => {
        console.log("댓글 삭제 실패");
      }
    );
  };

  return (
    <div ref={myRef}>
      <img
        src={
          process.env.PUBLIC_URL +
                (!isError ?
                (chatIconClicked ? '/images/bubble_chat_icon_b&w.png' : '/images/bubble_chat_icon.png') :
                '/images/bubble_chat_icon_b&w.png')
            }
        onClick={()=>{
          myPageToggleHandler();
          }
        }
        alt="채팅 아이콘"
      />
      <div>
        <div>
          </div> {/* dropdown-button */}
          <div className={`comment-menu ${myPageIsOpen ? 'open' : ''}`}>
            <div className='comment-menu-title'>댓글 및 후원</div>
            <div className='comment-menu-container'>
              {/* 댓글 표시 */}
              <div className='comment-section-container'>
                {comments.map((item) => (
                  <div className='comment-section-comment-wrapper' key={item.commentId}>
                    <div className='comment-section-comment-header-wrapper'>
                      <div className='comment-section-comment-header-nickname'>
                        {item.userId}
                      </div>
                      <div className='comment-section-comment-header-delete'>
                        {!item.myComment ? null: (
                        <RiDeleteBin6Line size="20" color="#DA5E9D" onClick={()=>{handleCommentDelete(item.commentId)}}/>
                        )}
                      </div>
                    </div>
                    <div className='comment-section-comment-body-wrapper'>
                      {item.content}
                    </div>
                    <div className='comment-section-comment-footer-wrapper'>
                      {item.commentId}
                    </div>
                  </div>
                ))}
                {!myPageIsOpen || !observeTarget  ? null : (
                  <div className='comment-section-comment-wrapper' ref={targetRef}>
                    loading...
                  </div>
                )}
              </div>
              <div className='comment-menu-bottom-wrapper'>
                {/* 댓글 입력 폼 */}
                <input
                  className='comment-menu-input-style'
                  type="text"
                  placeholder="댓글을 입력하세요."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <GoPaperAirplane
                  color={commentClicked ? '#800000' : '#FF3CBB'}
                  size="30"
                  onClick={handleCommentSubmit}
                />
                {/* 후원 아이콘 */}
                <RiCoinsFill color= '#FF8200' size = '40'/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};


export default CommentButton;