import React, { useState } from 'react';
import './LoginPage/LoginPage.css';
import {loginUser, reissueToken} from '../API/AuthentificationAPI.js';
import { useNavigate } from 'react-router-dom';

import { BiHide, BiShow } from "react-icons/bi";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(username, password, (json) => {
        document.cookie = `accessToken=${json.accessToken};`;
        navigate('/search');
    })

    // 로그인 처리 로직을 추가해야 합니다.
    // 예를 들어, 서버와 통신하여 로그인을 시도하고 성공 여부에 따라 다른 동작을 수행합니다.
  };

  return (
    <div className="container">
        <div className="login-container">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
            </div>
            <div className="login-form">
                <div className="input-container">
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BiHide color="#999999"/> : <BiShow color="#999999"/>}
                    </span>
                </div>
                </div>
                <button className="login-button" onClick={handleLogin}>로그인</button>
            </div>
            <div className="links">
                <a>아이디/비밀번호 찾기</a>
                <span> | </span>
                <a>회원가입</a>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
