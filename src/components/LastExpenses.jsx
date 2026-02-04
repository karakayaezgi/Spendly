import React from 'react'
import LastExpenseItem from './LastExpenseItem'
import {categoryIcons} from '../constants/categoryIcons.jsx'
import EmptyState from './EmptyState.jsx'

const LastExpenses = ({ lastFiveExpenses }) => {
  return (
    <div className='shadow p-6 rounded-2xl'>
      <div className="mb-10">
        <strong className="text-2xl">Son işlemler</strong>
        <p className="text-gray-600 text-xs sm:text-sm">En sonki harcamalarınızı görüntüleyin</p>
      </div>
      {
        lastFiveExpenses.length === 0 ? <EmptyState description={'Herhangi bir işlem yok.'}/> : 
        lastFiveExpenses.map((lastExpense, i) => {
          return <LastExpenseItem key={i} lastExpense={lastExpense} categoryIcon={categoryIcons[lastExpense.category]}/>
        })
      }


    </div>
  )
}

export default LastExpenses
