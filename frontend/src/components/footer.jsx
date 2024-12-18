import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/footer.css";  // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <NavLink to="/">MyLogo</NavLink>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
          </ul>
        </nav>
        <div className="social-media">
          <ul>
            <li><a href="https://www.linkedin.com/in/kaveeshwaray/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/YasiruKaveeshwara" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://x.com/kaveeshwaray" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/kaveeshwaray" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://wa.me/94701181568" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="mailto:kaveeshwaray@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yasiru Kaveeshwara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
