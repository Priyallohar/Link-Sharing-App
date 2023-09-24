import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import Links from '../Links/Links'
import"./Dashboard.scss"
import Preview from "../Preview/Preview"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader></DashboardHeader>
        <Links></Links>
        {/* <Preview></Preview> */}
    </div>
  )
}

export default Dashboard