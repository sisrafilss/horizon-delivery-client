import React from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand className="nav-item" href="#home">
            Horizon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="nav-item" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item" to="/login">
                Login
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
