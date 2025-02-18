import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "../Styles/Contact.css";
import FindMe from "../components/FindMe";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs.sendForm("service_niilndo", "template_6z5idye", form.current, "VOBt6Akm1LhI5CZG-").then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <Container className="contact-container">
      <Row>
        <Col md={6} className="contact-left">
          <h1 className="contact-title">Let's <span className="highlight">Connect</span></h1>
          <p className="contact-subtitle">
            Have a project or a question? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </Col>

        <Col md={6} className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <AiOutlineUser className="input-icon" />
              <input type="text" name="from_name" className="user-input" placeholder="Your Name" onChange={handleChange} />
            </div>

            <div className="input-group">
              <AiOutlineMail className="input-icon" />
              <input type="email" name="reply_to" className="user-input" placeholder="Your Email" onChange={handleChange} />
            </div>

            <div className="input-group">
              <BiMessageDetail className="input-icon" />
              <textarea name="message" className="user-input" placeholder="Your Message" onChange={handleChange}></textarea>
            </div>

            <span className="error-text">{notDone && "Please fill all the fields"}</span>

            <Button type="submit" className={`submit-button ${done ? "disabled" : ""}`} disabled={done}>
              <FaPaperPlane className="send-icon" /> {done ? "Sent!" : "Send Message"}
            </Button>

            <span className="success-text">
              {done && "Thank you for reaching out! I'll get back to you soon."}
            </span>
          </form>
        </Col>
      </Row>
      <FindMe />
    </Container>
  );
};

export default Contact;
