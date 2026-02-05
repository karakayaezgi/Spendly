import React, { useState } from 'react'
import ExpensesSummary from '../components/ExpensesSummary'
import LastExpenses from '../components/LastExpenses'
import CategoryProgress from '../components/CategoryProgress'

const Dashboard = ({expenses}) => {

  const d = new Date()
    const day = d.getDate()
    const month = d.getMonth() + 1
  
    const totalOfToday = expenses
    .filter((expense) => Number(expense.date.split('-')[2]) === day)
    .reduce((accumulator, expense) => accumulator + Number(expense.amount), 0)
    
    const totalOfMonth = expenses
    .filter((expense) => Number(expense.date.split('-')[1]) === month) 
    .reduce((accumulator, expense) => accumulator + Number(expense.amount), 0)
 
    const expensesThisMonth = expenses
    .filter((expense) => Number(expense.date.split('-')[1]) === month) 

    const lastFiveExpenses = expenses.slice(-6).sort((a,b) => new Date(b.date)-new Date(a.date))

  return (
    <div>
      <strong className='text-2xl md:text-4xl'>Genel Bakış</strong>
      <ExpensesSummary totalOfMonth={totalOfMonth} totalOfToday={totalOfToday} expenses={expenses}/>
      <div className='grid md:grid-cols-2 gap-3 my-10'>
        <CategoryProgress totalOfMonth={totalOfMonth} expensesThisMonth={expensesThisMonth}/>
        <LastExpenses lastFiveExpenses={lastFiveExpenses}/>
      </div>
    </div>
  )
}

export default Dashboard
