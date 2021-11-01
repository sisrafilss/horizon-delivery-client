import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar className="navbar-bg" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} className="nav-item" to="/home">
            Horizon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="nav-item" to="/home">
                Home
              </Nav.Link>

              {user.email && (
                <Nav.Link as={Link} className="nav-item" to="/my-orders">
                  My Orders
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} className="nav-item" to="/manage-all-orders">
                  Manage All Orders
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} className="nav-item" to="/add-a-new-service">
                  Add a New Service
                </Nav.Link>
              )}

              {user.email ? (
                <button
                  onClick={logOut}
                  className="rounded-3"
                  style={{ padding: "0px 10px" }}
                >
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} className="nav-item" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>

            {user.email && (
              <div className="mx-3">
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
                <span className="text-light"> {user?.displayName} </span>
              </div>
            )}

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
