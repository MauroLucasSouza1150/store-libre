import "./CartItems.css"

import { BsCartDashFill } from "react-icons/bs";

import formatCurrency from "../../utils/formatCurrency"

const CartItems = ({ data }) => {
    const { thumbnail, title, price } = data;

  return ( 
    <section className="cart-item">
        <img src={thumbnail} alt="Imagem do produto" className="cart-item-image" />
        <div className="cart-item-content">
            <h3 className="cart-item-title">{title}</h3>
            <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
            <button type="button" className="button__remove-item">
                <BsCartDashFill />
            </button>
        </div>
    </section>
  )
}

export default CartItems