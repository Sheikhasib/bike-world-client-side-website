import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, description, price, img } = product;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card className="product" sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          className="product-img"
          component="img"
          style={{ width: "100%", height: "200px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {price}
          </Typography>
          <Link to={`/products/${_id}`}>
            {" "}
            <button className="btn btn-info">Order Now</button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
