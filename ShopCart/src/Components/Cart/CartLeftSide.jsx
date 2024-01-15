import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeAllfromCart, removeCart } from '../../utils/cartSlice'

const CartLeftSide = ({img, onClick, product, price, title}) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(store => store.cart)
  const totalItem = cartItem.filter(item => item === product.id).length
  const handleRemoveItem = () =>{
    dispatch(removeCart(product.id))
  }

  const handleAddMoreItem = () =>{
    dispatch(addToCart(product.id))
  }

  const handleRemoveAll = () => {
    dispatch(removeAllfromCart(product.id))
  }
  return (
    
<>
    <div className='w-52 sm:w-96 mt-10 border-2 p-2'>
    <button onClick={handleRemoveAll}
     className=' text-2xl border px-2 ml-80'>
      X
    </button>
      <img onClick={onClick} className='sm:w-72 h-24 mx-auto sm:h-auto rounded-md ' src= {img} alt="Card Image" />
      <p className='font-semibold text-xs sm:text-lg '>{title}</p>
    </div>

    
    <div className='flex items-center justify-between my-2'>
          <p className='font-semibold  text-sm sm:text-lg font-mono'>${price}</p>

          <div>
              <button onClick={handleRemoveItem}
              className=' bg-[#f1f1f1] text-sm sm:text-xl rounded-md font-semibold font-mono px-2 py-0.5 mx-2 sm:py-2'>
                -
              </button>

              <span>{totalItem}</span>

              <button onClick={handleAddMoreItem}
              className=' bg-[#f1f1f1] text-sm sm:text-xl rounded-md font-semibold font-mono px-2 py-0.5 mx-2 sm:py-2'>
                +
              </button>
          </div>
      </div>
</>

  )
}

export default CartLeftSide