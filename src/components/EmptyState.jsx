import React from 'react'

const EmptyState = ({description}) => {
  return (
    <div>
      <p className='my-3 font-semibold text-red-700'>{description}</p>
    </div>
  )
}

export default EmptyState
