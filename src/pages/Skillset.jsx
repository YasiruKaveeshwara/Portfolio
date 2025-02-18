import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaCode, FaTools, FaDatabase, FaPalette, FaServer, FaCloud, FaMobileAlt, FaBug, FaUserTie } from "react-icons/fa";
import PreLoader from "../components/PreLoader";
import OtherSkills from "../components/OtherSkills";
import "../Styles/Skillset.css";

function Skillset() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch("/resources/skills.json")
      .then((response) => response.json())
      .then((jsonData) => setSkills(jsonData.skills || []))
      .catch((error) => console.error("Error loading skills data:", error));
  }, []);

  const categoryIcons = {
    "Programming Languages": <FaCode className='category-icon' />,
    "Frontend Development": <FaPalette className='category-icon' />,
    "Backend Development": <FaServer className='category-icon' />,
    "Database Management": <FaDatabase className='category-icon' />,
    "Cloud & DevOps": <FaCloud className='category-icon' />,
    "Mobile Development": <FaMobileAlt className='category-icon' />,
    "Testing & Quality Assurance": <FaBug className='category-icon' />,
    "UI/UX Design": <FaPalette className='category-icon' />,
    "Soft Skills": <FaUserTie className='category-icon' />,
    "Professional Skills": <FaTools className='category-icon' />,
  };

  return (
    <div className='skillset-container'>
      <Container>
        <Zoom>
          <h2 className='section-title'>💡 My Skillset</h2>
        </Zoom>

        {/* Debugging: Check if Other Skills is Loaded */}
        <OtherSkills />

        {/* Technical Skills Section */}
        {skills ? (
          skills.map((category) => (
            <div key={category.category} className='skill-category'>
              <Fade triggerOnce>
                <h3 className='category-title'>
                  {categoryIcons[category.category] || <FaTools />} {category.category}
                </h3>
              </Fade>
              <Row>
                {category.skills.map((skill) => (
                  <Col key={skill.name} xs={6} sm={4} md={3} lg={2} className='skill-col'>
                    <Fade triggerOnce>
                      <div className='skill-card'>
                        <div className='skill-icon'>
                          <i className={skill.icon}></i>
                        </div>
                        <span className='skill-name'>{skill.name}</span>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        ) : (
          <PreLoader />
        )}
      </Container>
    </div>
  );
}

export default Skillset;
