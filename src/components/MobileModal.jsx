import React from 'react'
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const MobileModal = ({onEdit, onDelete, onClose}) => {
  return (
    <div className='bg-white border flex flex-col gap-4 border-gray-300 p-3 rounded-2xl absolute top-2 right-1'>
      <div onClick={() => {
        onDelete()
        onClose()
      }
      } className='flex items-center gap-3'>
        <CiTrash className='size-5'/>
        <p>Sil</p>
      </div>
      <div onClick={() => {
        onEdit()
        onClose()
      }} className='flex items-center gap-3'>
        <HiOutlinePencilSquare className='size-5'/>
        <p>Güncelle</p>
      </div>
    </div>
  )
}

export default MobileModal
