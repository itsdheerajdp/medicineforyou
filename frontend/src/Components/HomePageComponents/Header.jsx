// Header.jsx

import React, { useState, useEffect } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [isTopFixed, setIsTopFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTopFixed(scrollPosition > 100); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary ${isTopFixed ? 'fixed-top' : ''}`}>
      <Container>
        <a href="/"><img src="assets/logo.png" height={80} width={250} style={{margin:"0px",objectFit:"cover",objectPosition:"center center"}} alt="MedicineForYou Logo" />  </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           </Nav>
          <Nav>
          <Nav.Link href="/careers">Work With Us</Nav.Link>
            <Nav.Link href="/store">Go to Store</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;