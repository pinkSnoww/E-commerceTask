import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink, Image } from 'react-bootstrap';
import '../sass/style.scss';
import background from '../assets/images/backPoster.jpg';
import ProductListing from '../components/ProductListing'
const App = () => {
  return (
    <div>
      <Container fluid className="header-container">
        <Row>
          <Col md={12}>
            <Navbar expand="lg" className="navbar" sticky="top">
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem>
                    <NavLink href="#home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#features">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Image src={background} alt="Header Image" className="header-image" />
          </Col>
        </Row>
      </Container>
      <Container className="production-list-container">
        <Row>
          <Col md={12}>
            <h2>Our Productions</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div >
            <ProductListing/>
            </div>
          </Col>
          
        </Row>
        
      </Container>
    </div>
  );
};

export default App;