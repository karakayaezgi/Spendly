import React from 'react'
import ExpenseRow from './ExpenseRow'

const ExpensesTable = () => {
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
          <ExpenseRow />
        </tbody>
      </table>
    </div>
  )
}

export default ExpensesTable
