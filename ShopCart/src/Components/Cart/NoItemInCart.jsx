import React from 'react';
import { FiFrown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const NoItemInCart = () => {
  const navigate = useNavigate()
  const handleAddNow = () => {
    navigate("/")
  }
  return (
    <div className='text-center'>
      <FiFrown size={300} />
      <p className='font-semibold text-4xl'>Your cart is empty</p>
      <button onClick={handleAddNow}
      className='bg-red-500 px-2 py-2 w-full rounded-md my-2 font-mono font-semibold text-lg'>
        Add now
      </button>
    </div>
  );
};

export default NoItemInCart;
