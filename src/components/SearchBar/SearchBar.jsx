import { useState, useContext } from "react";
import { IoMdSearch } from "react-icons/io";

import fetchProducts from "../../api/fetchProducts";
import ApiContext from "../../context/apiContext";

import "./SearchBar.css"

const SearchBar = () => {
  const [searchValor, setSearchValor] = useState("");
  const { setProducts, setLoading } = useContext(ApiContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValor);

    setProducts(products);
    setLoading(false)
    setSearchValor("");
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
        <input type="search" placeholder="Buscar Produtos" className="search__input" required
        valor={searchValor} onChange={({ target }) => setSearchValor(target.value) }/>
        <button type="submit" className="search__button"><IoMdSearch /></button>
    </form>
  )
}

export default SearchBar;