import React, { useState } from 'react';
import './LoginPage/LoginPage.css';
import { loginUser } from '../API/AuthentificationAPI.js';
import { setCookie } from '../API/HandleTokens.js';

import { useNavigate } from 'react-router-dom';

import { BiHide, BiShow } from "react-icons/bi";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(username, password, (json) => {
        setCookie('accessToken', json.accessToken, 30*60);
        setCookie('refreshToken', json.refreshToken, 7*24*60*60);
        navigate('/search');
    })
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
                <a onClick={(e) => {navigate('/signup')}}>회원가입</a>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
