import React from 'react'
import { CiMenuKebab } from "react-icons/ci"
import MobileModal from '../components/MobileModal'
import { categoryIcons } from '../constants/categoryIcons'
import EmptyState from './EmptyState'

const MobileExpenseCard = ({ expenses, handleMobileModal, onEditExpense, onDeleteExpense, closeMobilModal, activeMobileExpense, emptyStateConfig}) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {
                emptyStateConfig && <EmptyState description={emptyStateConfig.description}/>
            }
            {expenses.map((expense) => (
                <div
                    key={expense.id}
                    className="relative bg-white rounded-xl shadow-sm border border-gray-300 p-3 flex flex-col gap-6"
                >
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-1'>
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-sm">
                                {categoryIcons[expense.category]}
                            </span>
                            <p className="text-xs text-blue-800 truncate">
                                {expense.category}
                            </p>
                        </div>
                        <CiMenuKebab
                            onClick={() => handleMobileModal(expense)}
                            className="size-5 text-gray-500 shrink-0"
                        />
                    </div>

                    <p className="text-sm font-medium text-gray-800 truncate">
                        {expense.title}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                            {expense.date}
                        </span>

                        <span className="text-sm font-semibold text-black">
                            ₺ {expense.amount}
                        </span>
                    </div>

                    {activeMobileExpense?.id === expense.id && (
                        <div className="absolute top-8 right-2 z-10">
                            <MobileModal onEdit={() => onEditExpense(expense)} onDelete={() => onDeleteExpense(expense.id)} onClose={closeMobilModal}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default MobileExpenseCard
