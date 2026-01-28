import React, { useEffect } from 'react'
import ExpenseRow from './ExpenseRow'
import { getExpenses } from '../services/expenseService'

const ExpensesTable = ({expenses}) => {
 

  return (
    <div className='shadow p-5 rounded-2xl'>
      <table className="w-full ">
        <thead className="text-left text-gray-500 text-sm">
          <tr>
            <th className="py-3">Tarih</th>
            <th>Kategori</th>
            <th>Açıklama</th>
            <th>Tutar</th>
            <th className="text-right">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => <ExpenseRow key={expense.id} expense={expense}/>)
          }
        </tbody>
      </table>

    </div>
  )
}

export default ExpensesTable
