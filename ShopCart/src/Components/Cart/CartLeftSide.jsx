import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../utils/cartSlice'

const CartLeftSide = ({img, onClick, product, price, title}) => {
  const dispatch = useDispatch()
  const handleRemoveItem = () =>{
    dispatch(removeCart(product.id))
  }
  return (
    
<>
    <div onClick={onClick} className='w-52 sm:w-96 mt-10 border-2 p-2'>
      <img className='sm:w-72 h-24 mx-auto sm:h-auto rounded-md ' src= {img} alt="Card Image" />
      <p className='font-semibold text-xs sm:text-lg '>{title}</p>
      <p className='font-semibold  text-sm sm:text-md font-mono'>${price}</p>
    </div>
    <div>
       <button onClick={handleRemoveItem}
      className='bg-orange-600 w-full text-sm sm:text-xl rounded-md font-semibold font-mono px-2 py-0.5 sm:py-2'>
        Remove
      </button>
    </div>
</>

  )
}

export default CartLeftSide