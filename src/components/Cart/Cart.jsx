
import { useContext } from "react"
import CartItems from "../CartItems/CartItems"
import "./Cart.css"
import ApiContext from "../../context/apiContext"

const Cart = () => {
  const { cartItems } = useContext(ApiContext);

  return (
    <section className="cart">
        <div className="cart-items">
            { cartItems.map((cartItem) => <CartItems key={cartItem} data={cartItem} />) }
        </div>
        <div className="cart-resume">
            resumo do carrinho
        </div>
    </section>
  )
}

export default Cart