
import { useContext } from "react"
import CartItems from "../CartItems/CartItems"
import "./Cart.css"
import ApiContext from "../../context/apiContext"
import formatCurrency from "../../utils/formatCurrency"

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(ApiContext);

  const totalPrice = cartItems.reduce((acc, item) => (
    item.price + acc
  ), 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
        <div className="cart-items">
            { cartItems.map((cartItem) => <CartItems key={cartItem} data={cartItem} />) }
        </div>
        <div className="cart-resume">
            Total: {formatCurrency(totalPrice, 'BRL')}
        </div>
    </section>
  )
}

export default Cart