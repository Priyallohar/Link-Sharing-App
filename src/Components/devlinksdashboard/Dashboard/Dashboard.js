import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import Links from '../Links/Links'
import"./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader></DashboardHeader>
        <Links></Links>
    </div>
  )
}

export default Dashboard