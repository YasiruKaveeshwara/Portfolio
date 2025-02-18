import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown"; // ✅ Ensure proper Markdown rendering
import PreLoader from "../components/PreLoader";
import "../Styles/ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch data from all three JSON files
        const [projectsResponse, miniProjectsResponse, mobileProjectsResponse] = await Promise.all([
          fetch("/resources/projects.json"),
          fetch("/resources/miniProjects.json"),
          fetch("/resources/Projects.json"),
        ]);

        // Check if responses are OK
        if (!projectsResponse.ok || !miniProjectsResponse.ok || !mobileProjectsResponse.ok) {
          throw new Error(`Error fetching data from JSON files`);
        }

        // Convert JSON responses
        const projectsData = await projectsResponse.json();
        const miniProjectsData = await miniProjectsResponse.json();
        const mobileProjectsData = await mobileProjectsResponse.json();

        // Search for project in all three sources
        const foundProject =
          projectsData.projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug) ||
          miniProjectsData.miniProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug) ||
          mobileProjectsData.mobileProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);

        if (!foundProject) {
          console.error("Project not found:", slug);
          return;
        }

        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjects();
  }, [slug]);

  if (!project) {
    return <PreLoader load={true} />;
  }

  return (
    <motion.div className='project-details-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <motion.img
              src={project.image}
              alt={project.title}
              className='project-image'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Col>
          <Col md={6}>
            <motion.div className='project-content' initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h1 className='project-title'>{project.title}</h1>
              <ReactMarkdown
                children={project.bodyText}
                components={{
                  p: ({ children }) => <span className='markdown-text'>{children}</span>, 
                  ul: ({ children }) => <ul className='markdown-list'>{children}</ul>, 
                }}
              />

              <div className='project-tags'>
                {project.tags.map((tag, index) => (
                  <span key={index} className='project-badge'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='project-links'>
                {project.links.map((link, index) => (
                  <Button key={index} className='project-button' href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.text === "GitHub" ? <FaGithub className='icon' /> : <FaExternalLinkAlt className='icon' />}
                    {link.text}
                  </Button>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default ProjectDetails;
