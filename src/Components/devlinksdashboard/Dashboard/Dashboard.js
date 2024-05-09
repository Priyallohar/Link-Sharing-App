<<<<<<< HEAD
import React, { useState } from "react";
import Links from "../Links/Links";
import "./Dashboard.scss";
import Preview from "../Preview/Preview";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import { Link } from "react-router-dom";
import { uiIconSvgLink } from "../../../content";
=======
import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Links from '../Links/Links';
import './Dashboard.scss';
import Preview from '../Preview/Preview';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import { Link } from 'react-router-dom';
import { uiIconSvgLink } from '../../../content';
>>>>>>> origin

const Dashboard = () => {
  const [islinkClick, setIsLinkClick] = useState(false);
  const [isProfileDetailClick, setIsProfileDetailClick] = useState(false);

  const linkclickStyleHandler = () => {
    setIsLinkClick(true);
    setIsProfileDetailClick(false);
  };

  const profileClickStyleHandler = () => {
    setIsProfileDetailClick(true);
    setIsLinkClick(false);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboardheader-outer-container">
        <header className="dash-header">
          <div className="dash-title">
<<<<<<< HEAD
           {uiIconSvgLink.logodevlinkSmall}
=======
            {uiIconSvgLink['logodevlinkSmall']}
>>>>>>> origin
            <h2>devlinks</h2>
          </div>

          <div className="profile-link-container">
            <div
              className={`links ${islinkClick ? 'click' : ''}`}
              onClick={linkclickStyleHandler}
            >
              {uiIconSvgLink['link']}
              <a>Links</a>
            </div>

            <div
              className={`profile ${isProfileDetailClick ? 'click' : ''}`}
              onClick={profileClickStyleHandler}
            >
              {uiIconSvgLink['profileDetails']}
              <a>Profile Deatils</a>
            </div>
          </div>
          <Link to="/preview" className="preview">
            <div>Preview</div>
          </Link>
        </header>
      </div>

      {islinkClick ? (
        <Links></Links>
      ) : isProfileDetailClick ? (
        <ProfileDetails></ProfileDetails>
      ) : (
        <Links></Links>
      )}
    </div>
  );
};

export default Dashboard;
