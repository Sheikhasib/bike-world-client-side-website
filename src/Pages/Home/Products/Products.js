import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://safe-headland-20298.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div id="products">
      
      <Box sx={{ flexGrow: 1 }}>
      <Container className="product-container">
        <Typography sx={{ fontWeight: 500, m:2, color: 'info.main' }} variant="h6" component="div">
        Our Products
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5, color: 'success.main' }} variant="h4" component="div">
          Products We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default Products;
