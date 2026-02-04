import React from 'react'
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { categoryIcons } from '../constants/categoryIcons.jsx'


const ExpenseRow = ({ expense, onDelete, onEdit }) => {
  return (
    <tr className="border-t-gray-200 border-t">
      <td className="py-4">{expense.date}</td>
      <td>
        <div className="flex gap-3 items-center">
          <div className="bg-gray-200 p-2 rounded-full">
            {categoryIcons[expense.category]}
          </div>
          {expense.category}
        </div>
      </td>
      <td>{expense.title}</td>
      <td><strong className='me-3'>₺</strong>{expense.amount}</td>
      <td className="text-right">
        <div className="flex justify-end gap-3">
          <CiTrash onClick={onDelete} className='size-6 cursor-pointer text-red-600' />
          <HiOutlinePencilSquare onClick={onEdit} className='size-6 cursor-pointer text-gray-500' />
        </div>
      </td>
    </tr>
  );
};


export default ExpenseRow
