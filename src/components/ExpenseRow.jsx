import React from 'react'
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";

      
const ExpenseRow = ({expense}) => {
  return (
    <tr className="border-t-gray-200 border-t">
      <td className="py-4">{expense.date}</td>
      <td>{expense.category}</td>
      <td>{expense.title}</td>
      <td><strong className='me-3'>₺</strong>{expense.amount}</td>
      <td className="text-right">
        <div className="flex justify-end gap-3">
          <CiTrash className='size-6 cursor-pointer text-red-600'/>
          <HiOutlinePencilSquare className='size-6 cursor-pointer text-gray-500'/>
        </div>
      </td>
    </tr>
  );
};


export default ExpenseRow
