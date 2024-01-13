import React from 'react';
import { useSelector } from 'react-redux';

const CartRightSide = () => {
  const products = useSelector((store) => store.product.productData);
  const cartItem = useSelector((store) => store.cart);
  if (!products || !cartItem) {
    return null;
  }

  const getCartItems = cartItem.length > 0 ? products.filter((item) => cartItem.includes(item.id)) : [];

  const totalPrice = getCartItems.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice)

  return (
    <div className='w-96'>
      <div className='border p-4 mb-1'>
        <h3 className='font-semibold text-lg my-2'>
          PRICE DETAILS <span className='text-[#353535] text-xs'>({getCartItems.length} Item{getCartItems.length > 1 ? 's' : ''})</span>
        </h3>

        {getCartItems.map((item) => (
          <div className='flex justify-between my-3' key={item.id}>
            <p>{item.title}</p>
            <span>${item.price}</span>
          </div>
        ))}
      </div>

      <div className='border p-4 font-bold'>
        <div className='flex justify-between'>
          <p>Total Amount</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className='text-center'>
        <button className='bg-pink-500 px-2 py-2 my-1 w-full rounded-sm'>PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CartRightSide;
