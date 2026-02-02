import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import ExpensesTable from '../components/ExpensesTable'
import { HiPlus } from "react-icons/hi";
import MobileExpenseCard from '../components/MobileExpenseCard';
import AddExpenseModal from '../components/AddExpenseModal'
import { getExpenses, deleteExpense, addExpense } from '../services/expenseService';
const Expenses = () => {

  const [isOpenAddExpenseModal, setIsAddExpenseOpenModal] = useState(false)
  const [isMobileModal, setIsMobileModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [editingExpense, setEditingExpense] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState()

  const handleMobileModal = () => {
    isMobileModal ? setIsMobileModal(false) : setIsMobileModal(true)
  }

  const handleDelete = async (id) => {
    await deleteExpense(id)
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id != id))
  }

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses])
  }

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) => prevExpenses.map((expense) => expense.id == updatedExpense.id ? updatedExpense : expense))
  }
  const editExpense = (expense) => {
    setEditingExpense(expense)
    setIsAddExpenseOpenModal(true)
  }

  const visibleExpenses = expenses
  .filter((expense) => {
    if(!searchText) return true
    return expense.title.toLowerCase().includes(searchText.toLowerCase())
  })
  .filter((expense) => {
    if(!selectedCategory) return true
    return expense.category == selectedCategory
  })

  useEffect(() => {
    const loadExpenses = async () => {
      const data = await getExpenses()
      setExpenses(data)
    }
    loadExpenses()


  }, [])
  return (
    <div>
      <div className='flex items-center justify-between'>
        <strong className='text-2xl md:text-4xl'>Harcamalar</strong>
        <div onClick={() => setIsAddExpenseOpenModal(true)} className='flex items-center gap-2 p-3 bg-blue-100 rounded-full right-1 top-0.5 cursor-pointer'>
          <HiPlus className='size-4 md:size-5 text-blue-800' />
          <p className='text-gray-600 md:text-base text-sm'>Yeni Ekle</p>
        </div>
      </div>
      <Filters searchText={searchText} setSearchText={setSearchText} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div>
        <div className='sm:block hidden'><ExpensesTable onEditExpense={editExpense} onDeleteExpense={handleDelete} expenses={visibleExpenses} /></div>
        <div className='sm:hidden block'><MobileExpenseCard isMobileModal={isMobileModal} handleMobileModal={handleMobileModal} /></div>
      </div>
      {
        isOpenAddExpenseModal && <AddExpenseModal onUpdateExpense={handleUpdateExpense} onAddExpense={handleAddExpense} editingExpense={editingExpense} onCloseModal={() => {
          setIsAddExpenseOpenModal(false)
          setEditingExpense(null)
        }
        } />
      }
    </div>
  )
}

export default Expenses
