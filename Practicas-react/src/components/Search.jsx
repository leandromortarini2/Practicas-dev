import React, { useState } from "react";
import { products } from "../utils/products";

const Search = () => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const handleOnchange = (event) => {
    const { value } = event.target;
    setSearch(value);

    const filtered = products.filter((element) =>
      element.nombre.toLowerCase().includes(search)
    );

    console.log(filtered);

    setProductsFiltered(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("productsFiltered:", productsFiltered);
    }

    if (event.key === "Escape") {
      console.log("Se presionó Escape ❌");
    }
  };

  return (
    <div className="w-full flex justify-center items-center gap-2 bg-white p-2">
      <input
        onKeyDown={handleKeyDown}
        type="search"
        onChange={handleOnchange}
        value={search}
        name="search"
        placeholder="Buscar..."
        className="w-72 h-10 px-2 border rounded-xl"
      />
    </div>
  );
};

export default Search;
