import { Categories } from "./Data";

export function getCategories() {
  const CategoriesList = Categories;
  return CategoriesList;
}

export function filterCategories(cateType) {
  let filtredCategories = getCategories().filter((type) => type.tipo === cateType);
  return filtredCategories;
}
