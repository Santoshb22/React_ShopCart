import React from 'react'

const ShimmerCard = () => {
  return (
    <div>
         <div className='border-2 rounded-md w-64 my-4 h-72 animate-pulse bg-gray-100'>
            {/* Shimmer effect for image */}
            <div className='h-64 w-full bg-gray-300 rounded-md'></div>
            {/* Shimmer effect for title */}
            <div className='h-6 w-2/3 mt-2 bg-gray-300 rounded-md'></div>
            {/* Shimmer effect for rating */}
            <div className='h-4 w-1/2 mt-2 bg-gray-300 rounded-md'></div>
         </div>
    </div>
  )
}

export default ShimmerCard