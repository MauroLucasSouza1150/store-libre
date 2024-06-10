import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import ApiContext from '../../context/apiContext';

import "./CartButton.css"

const CartButton = () => {
  const { cartItems, isCartVisible, setCartVisible } = useContext(ApiContext);

  return (
    <button type='button' className='cart__button' 
    onClick={() => setCartVisible(!isCartVisible)}>
      <MdOutlineShoppingCart />
    { cartItems.length > 0 && <span className='cart__status'>{cartItems.length}</span> }
    </button>
  )
}

export default CartButton