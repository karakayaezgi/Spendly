import React from 'react'
import LastExpenseItem from './LastExpenseItem'
import { HiPlus } from "react-icons/hi";
const LastExpenses = () => {
  return (
    <div className='relative'>
      <LastExpenseItem />
      <div className='p-2 bg-blue-100 rounded-full absolute top-7 right-5 cursor-pointer'>
        <HiPlus className='size-3 sm:size-5 text-blue-800' />
      </div>
    </div>
  )
}

export default LastExpenses
