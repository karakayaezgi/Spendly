import React, { useState } from 'react'
import Filters from '../components/Filters'
import ExpensesTable from '../components/ExpensesTable'
import { HiPlus } from "react-icons/hi";
import MobileExpenseCard from '../components/MobileExpenseCard';
import AddExpenseModal from '../components/AddExpenseModal'
import { deleteExpense } from '../services/expenseService';
import { toastAdd, toastDelete, toastUpdate, toastError } from '../utils/toast'
const Expenses = ({ expenses, setExpenses }) => {

  const [isOpenAddExpenseModal, setIsAddExpenseOpenModal] = useState(false)
  const [activeMobileExpense, setActiveMobileExpense] = useState(false)
  const [editingExpense, setEditingExpense] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedSort, setSelectedSort] = useState()

  const handleMobileModal = (expense) => {
    setActiveMobileExpense(expense)
  }
  const closeMobilModal = () => {
    setActiveMobileExpense(null)
  }

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id)
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id != id))
      toastDelete()
    }
    catch(error){
      toastError('Silme işlemi başarısız.')
    }
  }

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense])
    toastAdd()
  }

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) => prevExpenses.map((expense) => expense.id == updatedExpense.id ? updatedExpense : expense))
    toastUpdate()
  }
  const editExpense = (expense) => {
    setEditingExpense(expense)
    setIsAddExpenseOpenModal(true)
  }

  let visibleExpenses = expenses
    .filter((expense) => {
      if (!searchText) return true
      return expense.title.toLowerCase().includes(searchText.toLowerCase())
    })
    .filter((expense) => {
      if (!selectedCategory) return true
      return expense.category == selectedCategory
    })
    .reverse()

  if (selectedSort) {
    visibleExpenses = [...visibleExpenses].sort((a, b) =>
      selectedSort == 'eskiden yeniye' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
    )
  }

  let emptyStateConfig = null

  if (expenses.length === 0) {
    emptyStateConfig = {
      description: 'Henüz bir harcama eklemediniz.'
    }
  }
  else if (visibleExpenses.length === 0) {
    if (searchText && selectedCategory) {
      emptyStateConfig = {
        description: 'Arama ve kategori kriterlerinize uygun bir harcama yok.'
      }
    }
    else if (searchText) {
      emptyStateConfig = {
        description: `"${searchText}" için eşleşen bir harcama yok.`
      }
    }
    else if (selectedCategory) {
      emptyStateConfig = {
        description: 'Bu kategoride harcama yok.'
      }
    }
  }



  return (
    <div>
      <div className='flex items-center justify-between'>
        <strong className='text-2xl md:text-4xl'>Harcamalar</strong>
        <div onClick={() => setIsAddExpenseOpenModal(true)} className='flex items-center gap-2 p-3 bg-blue-100 rounded-full right-1 top-0.5 cursor-pointer'>
          <HiPlus className='size-4 md:size-5 text-blue-800' />
          <p className='text-gray-600 md:text-base text-sm'>Yeni Ekle</p>
        </div>
      </div>
      <Filters selectedSort={selectedSort} setSelectedSort={setSelectedSort} searchText={searchText} setSearchText={setSearchText} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div>
        <div className='sm:block hidden'><ExpensesTable emptyStateConfig={emptyStateConfig} onEditExpense={editExpense} onDeleteExpense={handleDelete} expenses={visibleExpenses} /></div>
        <div className='sm:hidden block'><MobileExpenseCard emptyStateConfig={emptyStateConfig} closeMobilModal={closeMobilModal} activeMobileExpense={activeMobileExpense} onEditExpense={editExpense} onDeleteExpense={handleDelete} expenses={visibleExpenses} handleMobileModal={handleMobileModal} /></div>
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
