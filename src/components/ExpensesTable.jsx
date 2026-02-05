import React from 'react'
import ExpenseRow from './ExpenseRow'
import EmptyState from './EmptyState'

const ExpensesTable = ({ expenses, onDeleteExpense, onEditExpense, emptyStateConfig }) => {


  return (
    <div className='shadow p-5 rounded-2xl'>
      {
        emptyStateConfig && expenses.length === 0 ? <EmptyState description={emptyStateConfig.description} /> :
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
                expenses.map((expense) => <ExpenseRow onEdit={() => onEditExpense(expense)} onDelete={() => onDeleteExpense(expense.id)} key={expense.id} expense={expense} />)
              }
            </tbody>
          </table>
      }


    </div>
  )
}

export default ExpensesTable
