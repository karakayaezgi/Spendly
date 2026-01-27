import React from 'react'
import { Link } from "react-router";
import { PiWalletLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { GoDatabase } from "react-icons/go";
const Navbar = () => {
  return (
    <div className='flex items-center shadow p-4 sm:justify-around justify-between sticky top-0 bg-white'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <div className='bg-blue-900 p-2 rounded-full'><PiWalletLight className='size-7 text-white' /></div>
        <p className='text-2xl text-blue-900 font-bold sm:block hidden'>Spendly</p>
      </div>
      <div className='flex items-center gap-4'>
        <Link to='/'>
          <div className='flex items-center gap-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-100  p-3 rounded-xl'>
            <RxDashboard className='text-sm' />
            <p>Ana Sayfa</p>
          </div>
        </Link>
        <Link to='/expenses'>
          <div className='flex items-center gap-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-100 p-2 rounded-xl'>
            <GoDatabase className='text-sm' />
            <p>Harcamalar</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
