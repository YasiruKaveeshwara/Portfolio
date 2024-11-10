import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">MyLogo</NavLink>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About Me</NavLink></li>
          </ul>
        </nav>
      </header>
      <div className="side-menu">
        <ul>
          <li><a href="https://www.linkedin.com/in/kaveeshwaray/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/YasiruKaveeshwara" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://x.com/kaveeshwaray" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.facebook.com/kaveeshwaray" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://wa.me/94701181568" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
          <li><a href="mailto:kaveeshwaray@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
