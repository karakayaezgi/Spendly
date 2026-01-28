import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import ExpensesTable from '../components/ExpensesTable'
import { HiPlus } from "react-icons/hi";
import MobileExpenseCard from '../components/MobileExpenseCard';
import AddExpenseModal from '../components/AddExpenseModal'
import { getExpenses } from '../services/expenseService';
const Expenses = () => {

  const [isOpenAddExpenseModal, setIsAddExpenseOpenModal] = useState(false)
  const [isMobileModal, setIsMobileModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const handleMobileModal = () => {
    isMobileModal ? setIsMobileModal(false) : setIsMobileModal(true)
  }

  useEffect(() => {
    getExpenses().then(setExpenses)
  },[expenses])
  return (
    <div>
      <div className='flex items-center justify-between'>
        <strong className='text-2xl md:text-4xl'>Harcamalar</strong>
        <div onClick={() => setIsAddExpenseOpenModal(true)} className='flex items-center gap-2 p-3 bg-blue-100 rounded-full right-1 top-0.5 cursor-pointer'>
          <HiPlus className='size-4 md:size-5 text-blue-800' />
          <p className='text-gray-600 md:text-base text-sm'>Yeni Ekle</p>
        </div>
      </div>
      <Filters />
      <div>
        <div className='sm:block hidden'><ExpensesTable  expenses={expenses}/></div>
        <div className='sm:hidden block'><MobileExpenseCard isMobileModal={isMobileModal} handleMobileModal={handleMobileModal}/></div>
      </div>
      {
        isOpenAddExpenseModal && <AddExpenseModal onCloseModal={() => setIsAddExpenseOpenModal(false)}/>
      }
    </div>
  )
}

export default Expenses
