import React from 'react'
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";

      
const ExpenseRow = () => {
  return (
    <tr className="border-t-gray-200 border-t">
      <td className="py-4">2023-10-15</td>
      <td>Gıda</td>
      <td>Açıklama</td>
      <td>150.00 TL</td>
      <td className="text-right">
        <div className="flex justify-end gap-3">
          <CiTrash className='size-6 cursor-pointer text-red-600'/>
          <HiOutlinePencilSquare className='size-6 cursor-pointer text-gray-500'/>assss
        </div>
      </td>
    </tr>
  );
};


export default ExpenseRow
