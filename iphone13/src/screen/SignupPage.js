import React, { useEffect, useState } from 'react';
import useDetectClose from '../hooks/useDetectClose';

import { useNavigate } from 'react-router-dom';
import { BiHide, BiShow } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { signupUser } from '../API/UserAPI.js';

import './SignupPage/SignupPage.css'
import './SignupPage/Modeless.css'

import Modal from './Modal/Modal.js';
import ModalPortal from './Modal/Portal.js';



const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [tag, setTag] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailModeless, emailRef, toggleEmailModeless] = useDetectClose(false);
  const [passwordModeless, passwordRef, togglePasswordModeless] = useDetectClose(false);
  const [tagModeless, tagRef, toggleTagModeless] = useDetectClose(false);
  const [nicknameModeless, nicknameRef, toggleNicknameModeless] = useDetectClose(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(()=> {
    if (!(isEmailValid ^ emailModeless))
      toggleEmailModeless();
  }, [email])

  useEffect(()=> {
    if (!(isPasswordValid ^ passwordModeless))
      togglePasswordModeless();
  }, [password])

  useEffect(()=> {
    if (!(isNicknameValid ^ nicknameModeless))
      toggleNicknameModeless();
  }, [nickname])

  useEffect(()=> {
    if (!(isTagValid ^ tagModeless))
      toggleTagModeless();
  }, [tag])

  const passwordValidation = [
    password.length >= 8 && password.length <= 20,
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /[!@#$%^&*~?]/.test(password),
    /[0-9]/.test(password),
    /^[a-zA-Z0-9!@#$%^&*~?]*$/.test(password),
  ];
  
  const nicknameValidation = [
    nickname.length > 1 && nickname.length <= 10,
    /^[a-zA-Z0-9가-힣]*$/.test(nickname),
  ];

  const tagValidation = [
    tag.length >= 6 && tag.length <= 15,
    /[a-z0-9._]/i.test(tag),
  ]

  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,10}$/.test(email);
  const isPasswordValid = passwordValidation.every(item => item === true)
  const isNicknameValid = nicknameValidation.every(item => item === true)
  const isTagValid = tagValidation.every(item => item === true)


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      emailRef.current.focus();
      return;
    } else if (!isPasswordValid) {
      passwordRef.current.focus();
      return;
    }
    else if (!isNicknameValid) {
      nicknameRef.current.focus();
      return;
    }
    else if (!isTagValid) {
      tagRef.current.focus();
      return;
    }

    signupUser("테스트", nickname, tag, email, password, ()=>{navigate('/')}, );
  };


  return (
    <div className="container">
      <div className="signup-container">
        <ModalPortal>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false);}}>
                <p>회원가입 중 오류가 발생했습니다.</p>
            </Modal>
        </ModalPortal>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
        </div>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              ref={emailRef}

              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => { isEmailValid || toggleEmailModeless(); }}
              onBlur={() => { emailModeless && toggleEmailModeless(); }}
              required
            />
            { (emailModeless && !isEmailValid && email.length > 0) &&
              <div className='modeless'>
                <p style={{color:"red"}}><ImCross/>&nbsp;&nbsp;유효한 이메일 형식이 아닙니다.</p>
              </div> }
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                ref={passwordRef}

                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => { isPasswordValid || togglePasswordModeless(); }}
                onBlur={() => { passwordModeless && togglePasswordModeless(); }}
                required
              />
              <span
                  className="password-toggle"
                  style={{right: "10px"}}
                  onClick={() => setShowPassword(!showPassword)}
              >
                  {showPassword ? <BiHide color="#999999"/> : <BiShow color="#999999"/>}
              </span>
            </div>
            { (passwordModeless && !isPasswordValid && password.length > 0) && 
              <div className='modeless'>
                {passwordValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;비밀번호는 8자 이상, 20자 이하여야 합니다.</p>}
                {passwordValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;영어 알파벳 소문자를 포함해야합니다.</p>}
                {passwordValidation[2] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;영어 알파벳 대문자를 포함해야합니다.</p>}
                {passwordValidation[3] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;특수문자(!@#$%^&*~?)를 포함해야합니다.</p>}
                {passwordValidation[4] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;숫자를 포함해야합니다.</p>}
                {passwordValidation[5] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;유효하지 않은 문자가 포함되었습니다.</p>}
              </div> }
          </div>


          <div className="form-group">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              ref={nicknameRef}

              onChange={(e) => setNickname(e.target.value)}
              onFocus={() => { isNicknameValid || toggleNicknameModeless(); }}
              onBlur={() => { nicknameModeless && toggleNicknameModeless(); }}
              required
            />
            { (nicknameModeless && !isNicknameValid && nickname.length > 0) &&
              <div className='modeless'>
                {nicknameValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;닉네임은 2자 이상, 10자 이하여야 합니다.</p>}
                {nicknameValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;닉네임에는 영어 알파벳, 한글, 숫자만 포함될 수 있습니다.</p>}
              </div> }
          </div>


          <div className="form-group">
            <label htmlFor="tag">태그</label>
            <input
              type="text"
              id="tag"
              value={tag}
              ref={tagRef}

              onChange={(e) => setTag(e.target.value)}
              onFocus={() => { isTagValid || toggleTagModeless(); }}
              onBlur={() => { tagModeless && toggleTagModeless(); }}
              required
            />
            { (tagModeless && !isTagValid && tag.length > 0) && 
              <div className='modeless'>
                {tagValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;태그는 6자 이상, 15자 이하여야 합니다.</p>}
                {tagValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;태그에는 영어 알파벳, 특수문자(._)만 포함될 수 있습니다.</p>}
              </div> }
          </div>
          <div className="button-container">
            <button className="submit-button" type="submit">가입하기</button>
            <button className="cancel-button" type="button" onClick={(e)=>{e.preventDefault(); navigate('/')}}>뒤로가기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;