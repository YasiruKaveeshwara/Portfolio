import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

import "../Styles/Social.css";

function Social() {
  return (
    <ul className='home-about-social-links'>
      {socialLinks.map((social) => (
        <li className='social-icons' key={social.label}>
          <a href={social.href} target='_blank' rel='noreferrer' className='icon-colour home-social-icons' aria-label={social.label}>
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

const socialLinks = [
  { href: "https://github.com/YasiruKaveeshwara", label: "github", icon: <AiFillGithub /> },
  { href: "https://www.linkedin.com/in/kaveeshwaray/", label: "linkedin", icon: <FaLinkedinIn /> },
  { href: "https://wa.me/94701181568", label: "whatsapp", icon: <FaWhatsapp /> },
  { href: "https://www.facebook.com/kaveeshwaray", label: "facebook", icon: <FaFacebookF /> },
  { href: "https://instagram.com/kaveeshwaray", label: "instagram", icon: <FaInstagram /> },
];

export default Social;
