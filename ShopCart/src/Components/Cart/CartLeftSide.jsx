import React from 'react'

const CartLeftSide = ({img, onClick, price, title}) => {

  return (
    <div onClick={onClick} className='w-96 my-10'>
     
            <img className='h-64 w-72 rounded-md' src= {img} alt="Card Image" />
            <p className='font-semibold'>{title}</p>
            <p className='font-semibold font-mono'>${price}</p>
            <button 
            className='bg-orange-600 w-full my-4 rounded-md font-semibold font-mono px-2 py-2'>
             Remove
            </button>
       
    </div>
  )
}

export default CartLeftSide