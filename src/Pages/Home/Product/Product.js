import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, description, price, img } = product;
  return (
    <Row xs={1} md={1} className="g-4">
      <Col>
        <Card className="product">
          <Card.Img variant="top" src={img} fluid />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <p>Price: {price}</p>
            <Link to={`/products/${_id}`}>
                  {" "}
                  <button className="btn btn-info">Order Now</button>
                </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Product;
