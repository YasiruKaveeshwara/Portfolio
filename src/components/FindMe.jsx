import React from "react";
import { Row, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import Social from "./Social";
// import "../Styles/FindMe.css";

function FindMe() {
  return (
    <Row>
      <Col md={12} className='home-about-social'>
        <Zoom>
          <h1>🌍 FIND ME ON</h1>
          <p>
            Let's <span className='highlight'>connect</span> and build something amazing together!
          </p>
        </Zoom>
        <Social />
      </Col>
    </Row>
  );
}

export default FindMe;
