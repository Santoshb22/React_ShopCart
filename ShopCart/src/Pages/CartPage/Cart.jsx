// Cart.js
import React from 'react';
import CartLeftSide from '../../Components/Cart/CartLeftSide';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getClickedItem } from '../../utils/clickedItem';
import NoItemInCart from '../../Components/Cart/NoItemInCart';
import CartRightSide from '../../Components/Cart/CartRightSide';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productData);
  const cartItem = useSelector((store) => store.cart);
  const getCartItems = cartItem.length > 0 ? products.filter((item) => cartItem.includes(item.id)) : [];

  const handleItemLocation = (clickedItem) => {
    dispatch(getClickedItem(clickedItem));
    navigate('/itemDetail');
  };

  return (
    <div className=' flex flex-col sm:flex-row items-center sm:items-start sm:flex sm:justify-between mx-[10%] gap-10 pt-16 sm:pt-24 min-h-[95%] sm:min-h-[98vh] '>
      <div>
        {cartItem.length > 0 ? (
          getCartItems.map((cartItems) => (
            <CartLeftSide
              key={cartItems.id}
              product={cartItems}
              onClick={() => {
                handleItemLocation(cartItems);
              }}
              img={cartItems.image}
              price={cartItems.price}
              title={cartItems.title}
            />
          ))
        ) : (
          <NoItemInCart />
        )}
      </div>

      <div>
        {
          cartItem.length > 0 && <CartRightSide/>
        }
      </div>
    </div>
  );
};

export default Cart;
