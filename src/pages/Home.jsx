import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/photo.jpg";
import Typewriter from "typewriter-effect";
import { Fade, Zoom } from "react-awesome-reveal";
import "../Styles/Home.css";
import FindMe from "../components/FindMe";

function Home() {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        // Only for mobile devices
        const scrollPosition = window.scrollY;
        setIsTyping(scrollPosition < 200); // ✅ Stop typing when scrolled past 200px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='home'>
      <Container fluid>
        <Row>
          <Col md={4} className='avatar-container'>
            <Zoom>
              <img src={homeLogo} alt='home pic' className='avatar' />
            </Zoom>
          </Col>

          <Col md={8} className={`home-about-section `} id='about'>
            <div>
              <Fade direction='left'>
                <h1 className='heading'>
                  Hi There!{" "}
                  <span className='wave' role='img' aria-labelledby='wave'>
                    👋🏻
                  </span>
                </h1>

                <strong className='heading-name'>
                  I'M
                  <strong className='main-name'> Yasiru Kaveeshwara</strong>
                </strong>

                <div className='typewriter-text'>
                  {isTyping && (
                    <Typewriter
                      className='typeWriter'
                      options={{
                        strings: [
                          "MERN Stack Developer",
                          "Effective Problem Solver",
                          "Passionate AI Enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                        delay: 20,
                      }}
                    />
                  )}
                </div>

                <div className='home-about-description'>
                  <h1 style={{ fontSize: "2.6em" }}>
                    LET ME <span className='blue'> INTRODUCE </span> MYSELF
                  </h1>
                  <p className='home-about-body'>
                    Hi, my name is <span className='blue'> Yasiru Kaveeshwara </span>
                    and I'm a software engineer undergraduate from <span className='blue'> Gampaha, Sri Lanka.</span>
                    <br />
                    <br />I specialize in <b className='blue'> Full-Stack Development </b> and love building new technologies.
                    <br />
                    <br />I am proficient in
                    <b className='blue'> JavaScript, </b> as well as have knowledge in programming languages such as Python, C, C++, and
                    <b className='blue'> Java.</b>
                    <br />
                    <br />I work with
                    <b className='blue'> Node.js, MongoDB,</b> and
                    <b className='blue'> modern JavaScript frameworks</b> like
                    <b className='blue'> React.js</b>.
                    <br />
                    <br />I am also interested in
                    <b className='blue'> Artificial Intelligence</b> and new innovations in tech.
                  </p>
                </div>
              </Fade>
            </div>
            <Row className='find-me-container'>
              <FindMe />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
