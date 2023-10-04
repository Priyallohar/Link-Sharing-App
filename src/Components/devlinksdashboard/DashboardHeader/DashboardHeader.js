import React, { useState } from "react";
import "./DashBoardHeader.scss";
import {Link }from "react-router-dom"

const DashboardHeader = () => {

  const[islinkClick , setIsLinkClick] = useState(false)
  const[isProfileDetailClick , setIsProfileDetailClick] = useState(false)

  const linkclickStyleHandler = ()=>{
    setIsLinkClick(true)
    setIsProfileDetailClick(false)
  }

  const profileClickStyleHandler = ()=>{
    setIsProfileDetailClick(true)
    setIsLinkClick(false)
  }

  return (
    <div className="dashboardheader-outer-container">
      <header className="dash-header">
        <div className="dash-title">
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
          <h2>devlinks</h2>
        </div>

        <div className="profile-link-container">
          <div className={`links ${islinkClick?"click":""}`} onClick={linkclickStyleHandler}>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#737373"
                d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
              />
            </svg>
            <a>Links</a>
          </div>
     
   
          <div className={`profile ${isProfileDetailClick ?"click":""}`} onClick={profileClickStyleHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#737373"
                d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"
              />
            </svg>
            <a>Profile Deatils</a>
          </div>
        </div>
       <Link to ="/preview">
        <div className="preview">
          <a>Preview</a>
        </div>
        </Link>
      </header>
    </div>
  );
};

export default DashboardHeader;
