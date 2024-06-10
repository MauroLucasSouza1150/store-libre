import ApiContext from "./apiContext"
import { useState } from "react"

const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setCartVisible] = useState(false);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setCartVisible,
    };

  return (
    <ApiContext.Provider value={ value }>
        {children}
    </ApiContext.Provider>
  )
}

export default Provider