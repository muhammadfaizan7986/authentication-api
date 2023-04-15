import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              style={{
                width: "70px",
              }}
              src="https://e7.pngegg.com/pngimages/489/396/png-clipart-bullseye-shooting-target-goal-aim-miscellaneous-service.png"
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto text-light">
          <Link to="/register" className="text-light text-decoration-none me-4">
            Register
          </Link>
          <Link to="/login" className="text-light text-decoration-none me-4">
            Login
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;