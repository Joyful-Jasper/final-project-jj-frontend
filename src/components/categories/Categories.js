import React, { useState, useEffect } from "react";
// import "./styles.css";
import { buttons } from "./Data";
import { getCategories, filterCategories } from "./CategoriesItem";
export default function Categories() {
  const [filtredCategories, setFiltredCategories] = useState(null);
  useEffect(() => {
    setFiltredCategories(getCategories());
  }, []);

  function handleCategories(e) {
    let typeCategories = e.target.value;
    typeCategories !== "all" ? setFiltredCategories(filterCategories(typeCategories)) : setFiltredCategories(getCategories());
  }

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handleCategories}>
              {type.name}
            </button>
          </>
        ))}

      {filtredCategories &&
        filtredCategories.map((type) => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))}
    </>
  );
}
