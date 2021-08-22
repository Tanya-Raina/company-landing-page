import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MyNavBar() {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">champions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Library</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">World Ranking</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;