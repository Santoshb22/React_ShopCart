import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { addToCart, removeCart } from '../../utils/cartSlice'

const ItemDetail = () => {
   const dispatch = useDispatch()
    const clickedItem = useSelector(store => store.clickedItem.showClickedItem)
    if(!clickedItem) return null

    const cartItem = useSelector(store => store.cart)
    const isInCart = cartItem.includes(clickedItem.id)
    console.log(cartItem)

    const toggleAddToCartBtn = () => {
      if(!isInCart) {
        dispatch(addToCart(clickedItem.id))
      } else {
        dispatch(removeCart(clickedItem.id))
      }
    }


  return (
    <div className='flex items-center mx-[10%] gap-10 pt-24 min-h-[98vh]'>
        <div>
           <img className='h-auto  border-2' src={clickedItem.image} alt="item image" />
           <button onClick={toggleAddToCartBtn}
            className='bg-orange-600 my-4 w-full rounded-md font-semibold font-mono px-2 py-2'>
             {
               !isInCart ? "Add to cart" : "Remove"
             }
            </button>
        </div>   
        <div>
            <span className='font-mono text-[#181818]'>{clickedItem.category}</span>
            <h1 className='text-3xl font-semibold mb-2'>{clickedItem.title}</h1>
            <p className='my-2'>{clickedItem.description}</p>
            <p>{clickedItem.rating.rate} ⭐ | {clickedItem.rating.count} <span className='text-[#2e2e2e]'>reviews</span> </p>
            <p className='font-semibold font-mono my-1'>${clickedItem.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail