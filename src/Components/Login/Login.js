import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Createaccount from "../Createaccount/Createaccount";
import { uiIconSvgLink } from "../../content.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (email.trim() === "") {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    if (password.trim() === "") {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  };

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <header className="header-title">
          {" "}
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

        <div className="login-inner-container">
          <h2 className="login">Login</h2>
          <p className="login-para">
            Add your personal deatils below to get back into the app
          </p>

          <form onSubmit={handleSubmit}>
            <div className="email">
              <p
                className={
                  showEmailError ? "email-address-error" : "email-address"
                }
              >
                Email address
              </p>
              <input
                className={showEmailError ? "email-input-error" : "email-input"}
                type="email"
                placeholder="eg.alex@gmail.com"
                value={email}
                onChange={HandleEmailChange}
              ></input>
               {uiIconSvgLink["email"]}
              {showEmailError && <p className="empty-email"> Can't be empty</p>}
            </div>

            <div className="password-container">
              <p
                className={
                  showPasswordError ? "password-para-error" : "password-para"
                }
              >
                Password
              </p>
              <input
                className={
                  showPasswordError ? "password-input-error" : "password-input"
                }
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
             {uiIconSvgLink["password"]}
              {showPasswordError && (
                <p className="empty-password"> Please check agian</p>
              )}
            </div>
            <Link  to="/dashboard">
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
