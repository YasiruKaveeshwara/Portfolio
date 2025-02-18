import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import "../Styles/Navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className='navContainer'>
      <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? "sticky" : "navbar"}>
        <Container>
          <Navbar.Brand href='/' className='d-flex align-items-center'>
            <img src={logo} className='img-fluid logo' alt='brand' />
            <span className='brand-name'>Yasiru Kaveeshwara</span> {/* ✅ Name added */}
          </Navbar.Brand>

          {/* Custom Toggler for Hamburger Menu */}
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            onClick={() => updateExpanded(expand ? false : "expanded")}
            className='hamburger-toggler'>
            <span className='toggler-icon'></span>
            <span className='toggler-icon'></span>
            <span className='toggler-icon'></span>
          </Navbar.Toggle>

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Item>
                <Nav.Link as={NavLink} to='/' onClick={() => updateExpanded(false)} end>
                  <AiOutlineHome className='nav-icon' /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/skillset' onClick={() => updateExpanded(false)}>
                  <GiSkills className='nav-icon' /> Skillset
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/project' onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen className='nav-icon' /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/education' onClick={() => updateExpanded(false)}>
                  <FaUserGraduate className='nav-icon' /> Education
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/resume' onClick={() => updateExpanded(false)}>
                  <CgFileDocument className='nav-icon' /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/contact' onClick={() => updateExpanded(false)}>
                  <AiOutlineContacts className='nav-icon' /> Contact Me
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
