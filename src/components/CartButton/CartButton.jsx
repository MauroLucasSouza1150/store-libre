import React from 'react'

import "./CartButton.css"

import { MdOutlineShoppingCart } from "react-icons/md";

const CartButton = () => {
  return (
    <button className='cart__button'><MdOutlineShoppingCart />
    <span className='cart__status'>1</span>
    </button>
  )
}

export default CartButton