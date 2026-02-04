import React from 'react'
import { CiForkAndKnife } from "react-icons/ci";


const LastExpenseItem = ({ lastExpense }) => {
    return (
        <div className='flex items-start justify-between my-4'>
            <div className='flex items-start gap-3'>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <CiForkAndKnife className='size-5' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-sm sm:text-base font-semibold'>{lastExpense.title}</p>
                    <div className='text-gray-600 flex items-center'>
                        <p className='text-xs' >{lastExpense.category}</p>
                        <p className='mx-2'>•</p>
                        <p className='text-xs'>{lastExpense.date}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-red-600'>-₺ {lastExpense.amount}</p>
            </div>
        </div>
    )
}

export default LastExpenseItem
