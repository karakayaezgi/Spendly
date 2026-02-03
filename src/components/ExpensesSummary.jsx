import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";

const ExpensesSummary = ({ expenses }) => {

  const d = new Date()
  const day = d.getDate()
  const month = d.getMonth() + 1

  const totalOfToday = expenses
  .filter((expense) => Number(expense.date.split('-')[2]) === day)
  .reduce((accumulator, expense) => accumulator + Number(expense.amount), 0)
  
  const totalOfMonth = expenses
  .filter((expense) => Number(expense.date.split('-')[1]) === month) 
  .reduce((accumulator, expense) => accumulator + Number(expense.amount), 0)
  


  return (
    <div>
      <div className='grid grid-cols-2 gap-3 mt-5'>
        <div className='flex items-center gap-5 shadow p-3 md:p-5 rounded-2xl'>
          <div className='p-2 bg-blue-100 rounded-full'>
            <CiCalendar className='size-3 sm:size-6 text-blue-800' />
          </div>
          <div>
            <p className='text-xs md:text-base'>Bu Ayki Harcamalar</p>
            <strong className='sm:text-xl lg:text-4xl'>₺ {totalOfMonth}</strong>
          </div>
        </div>
        <div className='flex items-center gap-5 shadow p-3 md:p-5 rounded-2xl'>
          <div className='p-2 bg-blue-100 rounded-full'>
            <IoWalletOutline className=' size-3 sm:size-6 text-blue-800' />
          </div>
          <div>
            <p className='text-xs md:text-base'>Bugünkü Harcamalar</p>
            <strong className='sm:text-xl lg:text-4xl'>₺ {totalOfToday}</strong>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExpensesSummary
