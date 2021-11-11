import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user, logOut} = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">World Tour</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#tourSpots">Tour Spots</Nav.Link>
            {user?.email ? 
                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link> : ''
            }
            {user?.email ? 
                <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link> : ''
            }
            <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="info">Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
