import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PlatformDropDown from "./PlatformDropDown";
import "./linksaddcontainer.scss"

const Linksaddcontainer = () => {
    const[isInputActivated ,setInputActivated ]=useState(false)
    const handleInputClick = () => {
        setInputActivated((prevActivated) => !prevActivated); // Toggle the state
      };
  return (
          <div className="link-add">
        <header className="title">
          <div>
            <HiMenuAlt4 /> Link
          </div>{" "}
          <button className="removebtn">Remove</button>
        </header>

        <div className="platform-container">
          <p className="platform-title">
            Platform{" "}
            <div className="downarrow-svg">
              <RiArrowDropDownLine className="arrow-svg" />
            </div>
          </p>

          <input
            className="platformlinks"
            placeholder="Select platform"
            onFocus={handleInputClick}
          ></input>
        </div>

        <div className="url-container">
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
          <p className="link-title">Link</p>
          <input
            type="url"
            placeholder="e.g. https://www.github.com/johnappleseed"
          ></input>
        </div>
        {isInputActivated &&<PlatformDropDown/>}
      </div>
  )
}

export default Linksaddcontainer