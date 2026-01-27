import React from 'react'
import Filters from '../components/Filters'
import ExpensesTable from '../components/ExpensesTable'
const Expenses = () => {
  return (
    <div>
      <strong className='text-2xl md:text-4xl'>Harcamalar</strong>
      <Filters />
      <ExpensesTable/>
    </div>
  )
}

export default Expenses
