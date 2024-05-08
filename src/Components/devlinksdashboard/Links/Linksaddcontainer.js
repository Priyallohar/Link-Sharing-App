import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import PlatformDropDown from './PlatformDropDown';
import { uiIconSvgLink } from '../../../content';
import './linksaddcontainer.scss';

const Linksaddcontainer = () => {
  const [isInputActivated, setInputActivated] = useState(false);
  const handleInputClick = () => {
    setInputActivated((prevActivated) => !prevActivated);
  };
  return (
    <div className="link-add">
      <header className="title">
        <div>
          <HiMenuAlt4 /> Link
        </div>
        <button className="removebtn">Remove</button>
      </header>

      <div className="platform-container">
        <p className="platform-title">
          Platform
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
        {uiIconSvgLink['link']}
        <p className="link-title">Link</p>
        <input
          type="url"
          placeholder="e.g. https://www.github.com/johnappleseed"
        ></input>
      </div>
      {isInputActivated && <PlatformDropDown />}
    </div>
  );
};

export default Linksaddcontainer;
