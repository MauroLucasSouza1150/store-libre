import "./CartItems.css"

import { BsCartDashFill } from "react-icons/bs";

import formatCurrency from "../../utils/formatCurrency"
import { useContext } from "react";
import ApiContext from "../../context/apiContext";

const CartItems = ({ data }) => {
    const { id, thumbnail, title, price } = data;
    const { cartItems, setCartItems } = useContext(ApiContext);

    const handleRemoveItem = () => {
      const updatedItem = cartItems.filter((item) => item.id != id);  
      setCartItems(updatedItem);
    }

  return ( 
    <section className="cart-item">
        <img src={thumbnail} alt="Imagem do produto" className="cart-item-image" />
        <div className="cart-item-content">
            <h3 className="cart-item-title">{title}</h3>
            <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
            <button type="button" className="button__remove-item" onClick={ handleRemoveItem }>
                <BsCartDashFill />
            </button>
        </div>
    </section>
  )
}

export default CartItems