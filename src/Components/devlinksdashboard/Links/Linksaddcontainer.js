import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PlatformDropDown from "./PlatformDropDown";
import "./linksaddcontainer.scss"
import "./PlatformDropDown.scss"
import {platformSvgLink , uiIconSvgLink} from "../../../content.js"

const Linksaddcontainer = () => {
    const[isInputActivated ,setInputActivated ]  = useState(false)
    const [InputValue, setInputValue]=useState(null)
    const [chooseSvg, setSvg]=useState(null)
    function platformAddHandler(e) {

      let selectedPlatformName = e.currentTarget.getAttribute('aria-label');
      let selectedPlatform = platformSvgLink.find(platform => platform.name === selectedPlatformName);
      setInputValue(selectedPlatformName)
      setSvg(selectedPlatform.platformSvg)
    } 


  return (
    <div className="link-add">
      <header className="title">
        <div className='link'>
          {uiIconSvgLink.dragAndDrop} Link
        </div>
        <button className="removebtn">Remove</button>
      </header>

      <div className="platform-container">
        <p className="platform-title">
          Platform{" "}

          <div className={isInputActivated?"downarrow-clicked":"downarrow-svg"}>
          {uiIconSvgLink.chevronDown}
          </div>
        </p>
        

        <div className='choosed-platform'>
        {chooseSvg}
        </div>
        

        <input
          className="platform-links"
          type=''
          placeholder="Select platform"
          value = {InputValue}
          onClick={() => setInputActivated(!isInputActivated)}
         
        ></input>

       {isInputActivated &&
       <div className="platform">
       <ul className="platformList">
         {platformSvgLink.map((platform) => (
           <li
             key={platform.name}
             aria-label={platform.name}
             className="platformName"
             onClick={(e) => platformAddHandler(e)}
           >
             {platform.platformSvg} <span>{platform.name}</span>
           </li>
         ))}
       </ul>
   </div>} 

     

  </div>

      <div className="url-container">
         {uiIconSvgLink["link"]}
        <p className="link-title">Link</p>
        <input
          type="url"
          placeholder="e.g. https://www.github.com/johnappleseed"
        ></input>
      </div>
    </div>
  );
}

export default Linksaddcontainer