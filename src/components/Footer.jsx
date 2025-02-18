import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";
import logo from "../assets/Logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Slogan & Name */}
          <Col md={4} className="footer-text">
            <h4 className="footer-slogan">Innovating with Code, Passion, and Purpose.</h4>
            <p className="footer-name">Crafted by <span className="highlight">Yasiru Kaveeshwara</span></p>
          </Col>

          {/* Logo & Copyright */}
          <Col md={4} className="footer-logo-container">
            <img src={logo} className="footer-logo" alt="brand" />
            <p>© {year} All Rights Reserved</p>
          </Col>

          {/* Social Media Icons */}
          <Col md={4} className="footer-body">
            <Social />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
