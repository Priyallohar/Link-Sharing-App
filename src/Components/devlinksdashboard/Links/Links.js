import React, { useState } from "react";
import "./Links.scss";

import Letgetstarted from "./Letgetstarted";
import Linksaddcontainer from "./Linksaddcontainer";
import MobilePreview from "./MobilePreview";

const Links = () => {
  const [isNewLinkBtnClick, setIsNewLinkBtnClick] = useState(false);
  const [linkCount, setLinkCount] = useState(0);

  const newLinkClickHandler = () => {
    setIsNewLinkBtnClick(true);
    setLinkCount(linkCount + 1);
  };

  function addContainer() {
    const containers = [];
    for (let i = 0; i < linkCount; i++) {
      containers.push(<Linksaddcontainer key={i} />);
    }
    return containers;
  }

  return (
    <div className="links-outer-container">
      <MobilePreview />
      <div className="customize-link-outer-container">
        <div className="customize-link-inner-container">
          <div className="header-part">
            <h2>Customize your links</h2>
            <p>
              Add/edit/remove links below and then share your profiles with the
              world!
            </p>
            <button className="addBtnLink" onClick={newLinkClickHandler}>
              + Add new link
            </button>
          </div>
          {isNewLinkBtnClick ? (
            <div className="add-link-container">{addContainer()}</div>
          ) : (
            <Letgetstarted />
          )}
        </div>
        <div className="saveBtn-container">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Links;
