import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Navbar />
      <main className="p-6 md:p-10">
        <Outlet />
      </main>
      <Footer className="mt-auto"/>
    </div>
  )
}

export default MainLayout
