import React from 'react'
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const MobileModal = () => {
  return (
    <div className='bg-white border border-gray-300 p-3 rounded-2xl absolute top-10 right-1'>
      <div className='flex items-center gap-3'>
        <CiTrash className='size-5'/>
        <p>Sil</p>
      </div>
      <div className='flex items-center gap-3'>
        <HiOutlinePencilSquare className='size-5'/>
        <p>Güncelle</p>
      </div>
    </div>
  )
}

export default MobileModal
