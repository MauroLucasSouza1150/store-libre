import ApiContext from "./apiContext"
import { useState } from "react"

const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems
    };

  return (
    <ApiContext.Provider value={ value }>
        {children}
    </ApiContext.Provider>
  )
}

export default Provider