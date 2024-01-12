import React from 'react'
import CartLeftSide from '../../Components/Cart/CartLeftSide'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getClickedItem } from '../../utils/clickedItem'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(store => store.product.productData)
  const cartItem = useSelector(store => store.cart)
  const getCartItems = cartItem.length > 0 ? products.filter(item => cartItem.includes(item.id)) : [];

  console.log(getCartItems)
  const handleItemLocation = (clickedItem) => {
    dispatch(getClickedItem(clickedItem))
    navigate("/itemDetail")
  }
  return (
    <div className='flex justify-between mx-[10%] gap-10 pt-24 min-h-[98vh] '>
      <div>
       {
        getCartItems.map(cartItems =>  <CartLeftSide
          key={cartItem.id}
          onClick = {() => {handleItemLocation(cartItems)}}
          img = {cartItems.image}
          price = {cartItems.price}
          title = {cartItems.title}
          />)
       }
      </div>

      <div className=''>
        Price detail
      </div>
    </div>
  )
}

export default Cart