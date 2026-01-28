import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import MobileModal from '../components/MobileModal'
const MobileExpenseCard = ({handleMobileModal, isMobileModal}) => {
    return (
        <div className='grid grid-cols-2 relative'>
            <div className='flex flex-col gap-3 shadow p-2 rounded-2xl relative'>
                <p>Market</p>
                <p>Gıda</p>
                <p className='text-sm text-gray-600'>2023-10-15</p>
                <strong>120.00 TL</strong>
                <CiMenuFries onClick={handleMobileModal} className='absolute top-3 right-3 size-5' />
                {
                    isMobileModal && <div><MobileModal /></div>
                }
            </div>
            
        </div>
    )
}

export default MobileExpenseCard
