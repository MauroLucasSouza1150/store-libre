import { useEffect, useContext } from 'react';

import fetchProducts from "../../api/fetchProducts.js"
import ProductCard from "../ProductCard/ProductCard.jsx"
import Loading from '../Loading/Loading.jsx';

import "./Products.css"
import ApiContext from '../../context/apiContext.js';

const Products = () => {
    const {products, setProducts, loading, setLoading} = useContext(ApiContext)

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false);
        })
    }, []);

  return (
    (loading ? <Loading /> : <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>)
  )
}

export default Products