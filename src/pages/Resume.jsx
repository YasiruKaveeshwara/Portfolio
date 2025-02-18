import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import "../Styles/Resume.css";

function Resume() {
  const resumeFile = process.env.PUBLIC_URL + "/resources/K A Y P Kaveeshwara - CV Resume.pdf";

  return (
    <div className="resume-page">
      <Container fluid className="resume-container">
        {/* Header Section */}
        <Row className="resume-header">
          <Col md={12} className="text-center">
            <h1 className="resume-title">
              <FaFilePdf className="resume-icon" /> My <span className="highlight">Resume</span>
            </h1>
            <p className="resume-subtitle">View or download my resume below</p>
          </Col>
        </Row>

        {/* Resume Display - Fullscreen */}
        <Row className="resume-content">
          <Col md={12} className="resume-viewer">
            <iframe src={resumeFile} title="Resume PDF" className="resume-iframe"></iframe>
          </Col>
        </Row>

        {/* Download Button */}
        <Row className="resume-footer">
          <Col md={12} className="text-center">
            <Button className="download-button" href={resumeFile} download>
              <FaDownload className="download-icon" /> Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
