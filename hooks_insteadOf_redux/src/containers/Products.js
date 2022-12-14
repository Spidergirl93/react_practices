import React /*, { useContext } */ from "react";
/* import { ProductsContext } from "../contexts/products-context"; */
import { useStore } from "../hooks-store/store";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const { products: productsList } = useStore(true)[0];


  
  return (
    <ul className="products-list">
      {productsList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
