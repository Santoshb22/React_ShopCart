import React from 'react';
import { useSelector } from 'react-redux';

const CartRightSide = () => {
  const products = useSelector((store) => store.product.productData);
  const cartItem = useSelector((store) => store.cart);
  if (!products || !cartItem) {
    return null;
  }

  const deliveryCharges = 12

  const totalItemInCart = cartItem.length > 0
  ? products.filter(item => cartItem.includes(item.id))
  : []

const totalPrice = totalItemInCart.reduce((acc, item) => {
  const count = cartItem.filter(id => id === item.id).length
  return (acc + item.price * count) + deliveryCharges 
}, 0)

  return (
    <div className='w-96 sm:w-96'>
      <div className='border p-4 mb-1'>
        <h3 className='font-semibold sm:text-lg my-2'>
          PRICE DETAILS 
        </h3>

        <div className=' flex justify-between items-center'>
          <p>
          Price 
          <span className='text-[#353535] text-xs'>({totalItemInCart.length} Item{totalItemInCart.length > 1 ? 's' : ''})</span>
          </p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className='flex justify-between items-center my-1'>
          <p>Delivery fee</p>
          <span>${deliveryCharges}</span>
        </div>
      </div>

      <div className='border p-4 font-bold'>
        <div className='flex justify-between'>
          <p>Total Amount</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className='text-center'>
        <button className='bg-pink-500 text-sm sm:text-lg font-mono h-8 sm:h-10 px-2 py-2 my-1 w-full rounded-sm'>PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CartRightSide;
