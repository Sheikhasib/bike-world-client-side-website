import React from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Card className="footer-container">
        <Card.Header style={{ fontWeight: "bold", fontSize: "larger" }}>
          Footer
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              “Life is like riding a bike, to keep your balance you have to keep moving.”{" "}
            </p>
            <footer className="footer">Copyright © This Website 2021.</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
