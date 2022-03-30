import axios from "axios";
import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );
    };
  });

  return <div>Products</div>;
};

export default Products;
