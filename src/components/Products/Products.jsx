import { useState, useEffect } from 'react';

import fetchProducts from "../../api/fetchProducts.js"
import ProductCard from "../ProductCard/ProductCard.jsx"

import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
        })
    }, []);

  return (
    <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>
  )
}

export default Products