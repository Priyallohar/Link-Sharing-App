import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import Createaccount from '../Createaccount/Createaccount';
import { uiIconSvgLink } from '../../content.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    if (password.trim() === '') {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  };

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <header className="header-title">
          {uiIconSvgLink['logodevlinkSmall']}
          <h2> devlinks</h2>
        </header>

        <div className="login-inner-container">
          <h2 className="login">Login</h2>
          <p className="login-para">
            Add your personal deatils below to get back into the app
          </p>

          <form onSubmit={handleSubmit}>
            <div className="email">
              <p
                className={
                  showEmailError ? 'email-address-error' : 'email-address'
                }
              >
                Email address
              </p>
              <input
                className={showEmailError ? 'email-input-error' : 'email-input'}
                type="email"
                placeholder="eg.alex@gmail.com"
                value={email}
                onChange={HandleEmailChange}
              ></input>
              {uiIconSvgLink['email']}
              {showEmailError && <p className="empty-email"> Can't be empty</p>}
            </div>

            <div className="password-container">
              <p
                className={
                  showPasswordError ? 'password-para-error' : 'password-para'
                }
              >
                Password
              </p>
              <input
                className={
                  showPasswordError ? 'password-input-error' : 'password-input'
                }
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              {uiIconSvgLink['password']}
              {showPasswordError && (
                <p className="empty-password"> Please check agian</p>
              )}
            </div>
            <Link to="/dashboard">
              <button className="submitBtn" type="submit">
                Login
              </button>
            </Link>
          </form>

          <p className="create-account-para">
            Don't have account <Link to="/Createaccount">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
