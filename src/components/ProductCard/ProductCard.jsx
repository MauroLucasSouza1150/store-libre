import { FaCartPlus } from "react-icons/fa";

import "./ProductCard.css"
import formatCurrency from "../../utils/formatCurrency";

const ProductCard = ({ data }) => {
    const { title, thumbnail, price } = data;
    
  return (
    <section className="product__card">
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="imagem do produto" className="card__image"/>
        <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            <h2 className="card__title">{title}</h2>
        </div>
        <button type="button" className="button__add-cart"><FaCartPlus /></button>
    </section>
  )
}

export default ProductCard