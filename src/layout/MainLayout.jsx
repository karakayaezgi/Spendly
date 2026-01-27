import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div className='min-h-secreen flex flex-col'>
      <Navbar />
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
