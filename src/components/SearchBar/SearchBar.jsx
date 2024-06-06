import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import "./SearchBar.css"

const SearchBar = () => {
  const [searchValor, setSearchValor] = useState("");

  return (
    <form className="search-bar">
        <input type="search" placeholder="Buscar Produtos" className="search__input" required
        valor={searchValor} onChange={({ target }) => setSearchValor(target.value) }/>
        <button type="submit" className="search__button"><IoMdSearch /></button>
    </form>
  )
}

export default SearchBar;