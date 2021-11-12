import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ExploreProducts.css";
import ExploreProduct from "../ExploreProduct/ExploreProduct";

const ExploreProducts = () => {
  const [exploreProducts, setExploreProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/exploreProducts")
      .then((res) => res.json())
      .then((data) => setExploreProducts(data));
  }, []);
  console.log(exploreProducts);
  return (
    <div id="exploreProducts">
      <Box sx={{ flexGrow: 1 }}>
        <Container className="product-container">
          <Typography
            sx={{ fontWeight: 500, m: 2, color: "info.main" }}
            variant="h6"
            component="div"
          >
            Our Products
          </Typography>
          <Typography
            sx={{ fontWeight: 600, m: 5, color: "success.main" }}
            variant="h4"
            component="div"
          >
            Products We Provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {exploreProducts.map((exploreProduct) => (
              <ExploreProduct
                key={exploreProduct.name}
                exploreProduct={exploreProduct}
              ></ExploreProduct>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ExploreProducts;
