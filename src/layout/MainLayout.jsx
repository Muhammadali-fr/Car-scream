import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout