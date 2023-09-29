import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Links from "../Links/Links";
import "./Dashboard.scss";
import Preview from "../Preview/Preview";
import ProfileDetails from "../ProfileDetails/ProfileDetails"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader></DashboardHeader>
      {/* <Links></Links> */}
      <ProfileDetails></ProfileDetails>
      
    </div>
  );
};

export default Dashboard;
