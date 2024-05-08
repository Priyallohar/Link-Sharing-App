import React, { useState } from 'react';
import './Createaccount.scss';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { uiIconSvgLink } from '../../content.js';

const Createaccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showEmailEmpty, setShowEmailEmpty] = useState(false);
  const [showPasswordEmpty, setShowPasswordEmpty] = useState(false);
  const [confirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setShowEmailEmpty(true);
    } else {
      setShowEmailEmpty(false);
    }

    if (password.trim() === '') {
      setShowPasswordEmpty(true);
    } else {
      setShowPasswordEmpty(false);
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordEmpty(true);
    } else {
      setConfirmPasswordEmpty(false);
    }

    if (password !== confirmPassword) {
      setPasswordMatch(true);
      setConfirmPasswordEmpty(false);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="CreateAccount-outer-container">
      <section className="createaccount-container">
        <header className="ca-header-title">
          {uiIconSvgLink['logodevlinkSmall']}
          <h2> devlinks</h2>
        </header>

        <div className="ca-inner-container">
          <h2 className="ca-title">Create account</h2>
          <p className="ca-para">Let's get you started sharing your links!</p>

          <form className="ca-form" onSubmit={submitHandler}>
            <div className="email-container ">
              <p
                className={
                  showEmailEmpty ? 'ca-email-label-empty' : 'ca-email-label'
                }
              >
                Email address
              </p>
              <input
                type="email"
                placeholder="eg.alex@gmail.com"
                value={email}
                onChange={emailHandler}
                className={
                  showEmailEmpty ? 'ca-email-input-empty' : 'ca-email-input'
                }
              ></input>
              {uiIconSvgLink['email']}
              {showEmailEmpty && (
                <p className={'ca-empty-email'}> Can't be empty</p>
              )}
            </div>

            <div className="create-password-container ">
              <p
                className={
                  showPasswordEmpty
                    ? 'ca-password-label-empty'
                    : 'ca-password-label'
                }
              >
                Create Password
              </p>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={passwordHandler}
                className={
                  showPasswordEmpty
                    ? 'ca-password-input-empty'
                    : 'ca-password-input'
                }
              ></input>
              {uiIconSvgLink['password']}
              {showPasswordEmpty && (
                <p className="ca-empty-password"> Please check agian</p>
              )}
            </div>

            <div className="confirm-password-container ">
              <p
                className={
                  confirmPasswordEmpty
                    ? 'confirm-ca-password-label-empty'
                    : 'confirm-ca-password-label'
                }
              >
                Confirm Password
              </p>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={confirmPassword}
                onChange={confirmPasswordHandler}
                className={
                  confirmPasswordEmpty
                    ? 'confirm-ca-password-input-empty'
                    : 'confirm-ca-password-input'
                }
              ></input>
              {uiIconSvgLink['password']}
              {passwordMatch && (
                <p className="confirm-ca-diff-password">
                  Password does not match
                </p>
              )}
              {confirmPasswordEmpty && (
                <p className="confirm-ca-password-empty"> Please check agian</p>
              )}
            </div>

            <p
              className={
                passwordLength
                  ? 'ca-pass-instruction-mismatchlength'
                  : 'ca-pass-instruction'
              }
            >
              Password must contain at least 8 characters
            </p>

            <button className="ca-submitBtn" type="submit">
              Create new account
            </button>
          </form>

          <p className="login-account">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Createaccount;
