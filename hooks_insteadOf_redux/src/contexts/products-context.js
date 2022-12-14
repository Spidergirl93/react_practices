import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (productId) => {},
});

export default (props) => {
  const [allProducts, setAllProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setAllProducts((prevAllProducts) => {
      const prodIndex = prevAllProducts.findIndex((p) => p.id === productId);
      const newFavStatus = !prevAllProducts[prodIndex].isFavorite;
      const updatedProducts = [...prevAllProducts];
      updatedProducts[prodIndex] = {
        ...prevAllProducts[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: allProducts, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
