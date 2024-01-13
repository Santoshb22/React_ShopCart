import React from 'react'

const Card = ( { img, onClick, title, rating, ratingCount } ) => {
  return (
    <div onClick={onClick} className='h-48 sm:h-[420px] border-2 rounded-md w-28 sm:w-64 flex flex-col  justify-center gap-1 p-4 mb-2 bg-[#f1f1f1] cursor-pointer' >
       <img className='h-24 sm:h-64 sm:w-72 rounded-md' src= {img} alt="Card Image" />
       <p className='font-semibold text-[8px] sm:text-lg'>{title}</p>
       <p className='text-[8px] sm:text-lg '>{rating} ⭐ | {ratingCount} <span className='text-[#2e2e2e]'>reviews</span></p>
    </div>
  )
}

export default Card