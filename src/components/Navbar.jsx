import React from 'react'
import { PiWalletLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router";
import { GoDatabase } from "react-icons/go";
const Navbar = () => {

  const linkClass = ({ isActive }) => 
    `flex items-center gap-3 cursor-pointer  p-2 ${isActive ? `border-b-2 border-blue-800` : ``}`
  


  return (
    <div className='flex items-center shadow p-4 sm:justify-around justify-between sticky top-0 bg-white'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <div className='bg-blue-900 p-2 rounded-full'><PiWalletLight className='size-7 text-white' /></div>
        <p className='text-2xl text-blue-900 font-bold sm:block hidden'>Spendly</p>
      </div>
      <div className='flex items-center gap-4'>
        <NavLink className={linkClass} to='/'>
          <RxDashboard className='text-sm' />
          <p>Ana Sayfa</p>
        </NavLink>
        <NavLink className={linkClass} to='/expenses'>
          <GoDatabase className='text-sm' />
          <p>Harcamalar</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
