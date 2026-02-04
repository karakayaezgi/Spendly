import React from 'react'
import LastExpenseItem from './LastExpenseItem'

const LastExpenses = ({ lastFiveExpenses }) => {
  return (
    <div className='shadow p-6 rounded-2xl'>
      <div className="mb-10">
        <strong className="text-2xl">Son işlemler</strong>
        <p className="text-gray-600 text-xs sm:text-sm">En sonki 5 harcamanızı görüntüleyin</p>
      </div>
      {
        lastFiveExpenses.map((lastExpense, i) => {
          return <LastExpenseItem key={i} lastExpense={lastExpense} />
        })
      }


    </div>
  )
}

export default LastExpenses
