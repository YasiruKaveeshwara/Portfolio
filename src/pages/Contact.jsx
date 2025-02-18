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
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Data Before Submission:", formData);

    if (!formData.from_name.trim() || !formData.reply_to.trim() || !formData.message.trim()) {
      setNotDone(true);
      setTimeout(() => setNotDone(false), 3000);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setDone(true);
          setFormData({
            from_name: "",
            reply_to: "",
            message: "",
          });
          setTimeout(() => setDone(false), 3000);
        },
        (error) => {
          console.error("Error:", error.text);
          setNotDone(true);
          setTimeout(() => setDone(false), 3000);
        }
      );
  };

  return (
    <Container className='contact-container'>
      <Row>
        <Col md={6} className='contact-left'>
          <h1 className='contact-title'>
            Let's <span className='highlight'>Connect</span>
          </h1>
          <p className='contact-subtitle'>Have a project or a question? Feel free to reach out. I'll get back to you as soon as possible.</p>
        </Col>

        <Col md={6} className='contact-right'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-group'>
              <AiOutlineUser className='input-icon' />
              <input type='text' name='from_name' className='user-input' placeholder='Your Name' value={formData.from_name} onChange={handleChange} />
            </div>

            <div className='input-group'>
              <AiOutlineMail className='input-icon' />
              <input type='email' name='reply_to' className='user-input' placeholder='Your Email' value={formData.reply_to} onChange={handleChange} />
            </div>

            <div className='input-group'>
              <BiMessageDetail className='input-icon' />
              <textarea name='message' className='user-input' placeholder='Your Message' value={formData.message} onChange={handleChange} />
            </div>

            <span className='error-text'>{notDone && "Please fill all the fields correctly"}</span>

            <Button type='submit' className={`submit-button ${done ? "disabled" : ""}`} disabled={done}>
              <FaPaperPlane className='send-icon' /> {done ? "Sent!" : "Send Message"}
            </Button>

            <span className='success-text'>{done && "Thank you for reaching out! I'll get back to you soon."}</span>
          </form>
        </Col>
      </Row>
      <FindMe />
    </Container>
  );
};

export default Contact;
