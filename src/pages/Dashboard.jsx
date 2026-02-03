import React, { useState } from 'react'
import ExpensesSummary from '../components/ExpensesSummary'
import LastExpenses from '../components/LastExpenses'
import CategoryProgress from '../components/CategoryProgress'

const Dashboard = ({expenses}) => {

  return (
    <div>
      <strong className='text-2xl md:text-4xl'>Genel Bakış</strong>
      <ExpensesSummary expenses={expenses}/>
      <div className='grid md:grid-cols-2 gap-3 my-10'>
        <CategoryProgress />
        <LastExpenses />
      </div>
    </div>
  )
}

export default Dashboard
