import React, { useState } from 'react';
import './Createaccount.scss';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

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
    setPasswordLength(e.target.value.length < 8);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //If email.trim() === "" evaluates to true, setShowEmailEmpty will be set to true; otherwise, it will be set to false.
    setShowEmailEmpty(email.trim() === '');
    setShowPasswordEmpty(password.trim() === '');
    setConfirmPasswordEmpty(confirmPassword.trim() === '');

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="#633CFF"
              fill-rule="evenodd"
              d="M4.619 27.38c1.954 1.953 5.095 1.953 11.38 1.953 6.286 0 9.429 0 11.38-1.953 1.954-1.95 1.954-5.095 1.954-11.38 0-6.286 0-9.428-1.953-11.381C25.43 2.667 22.285 2.667 16 2.667c-6.286 0-9.428 0-11.381 1.952-1.952 1.954-1.952 5.095-1.952 11.38 0 6.286 0 9.429 1.952 11.38Zm8.047-15.713A4.333 4.333 0 1 0 17 16a1 1 0 0 1 2 0 6.333 6.333 0 1 1-6.334-6.334 1 1 0 1 1 0 2Zm11 4.333a4.333 4.333 0 0 1-4.333 4.333 1 1 0 1 0 0 2A6.333 6.333 0 1 0 13 16a1 1 0 1 0 2 0 4.334 4.334 0 0 1 8.666 0Z"
              clip-rule="evenodd"
            />
          </svg>
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
                placeholder="alex@gmail.com"
                value={email}
                onChange={emailHandler}
                className={
                  showEmailEmpty ? 'ca-email-input-empty' : 'ca-email-input'
                }
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#737373"
                  d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                />
              </svg>
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
