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
    <div onClick={onClick} className='w-96 mt-10'>
      <img className='h-64 w-72 rounded-md' src= {img} alt="Card Image" />
      <p className='font-semibold'>{title}</p>
      <p className='font-semibold font-mono'>${price}</p>
    </div>
    <div>
       <button onClick={handleRemoveItem}
      className='bg-orange-600 w-full  rounded-md font-semibold font-mono px-2 py-2'>
        Remove
      </button>
    </div>
</>

  )
}

export default CartLeftSide