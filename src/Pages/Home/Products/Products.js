import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div id="products">
      <h2 className="mt-5">Our Products</h2>
      <div className="products-container">
        {
            products?.map((product, index) => <Product 
              key={product._id}
              product={product}
            ></Product>)
        }
      </div>
    </div>
  );
};

export default Products;
