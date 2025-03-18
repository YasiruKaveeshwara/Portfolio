import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import PreLoader from "../components/PreLoader";
import "../Styles/ProjectDetails.css";

const fallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 8'%3E%3Crect width='16' height='9' fill='%23ddd' fill-opacity='0.2'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23aaa' font-size='1'%3ENo Image%3C/text%3E%3C/svg%3E"; // ✅ 16/9 styled square as a fallback image with 0.2 transparency and "NO IMAGE" text

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 🆕 Added for image sliding

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = window.location.origin; // Dynamically get base URL
        const [projectsResponse, miniProjectsResponse] = await Promise.all([
          fetch(`${baseUrl}/resources/projects.json`),
          fetch(`${baseUrl}/resources/miniProjects.json`)
        ]);
    
        if (!projectsResponse.ok || !miniProjectsResponse.ok) {
          throw new Error(`Error fetching data from JSON files`);
        }
    
        const projectsData = await projectsResponse.json();
        const miniProjectsData = await miniProjectsResponse.json();
    
        const foundProject =
          projectsData.projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug) ||
          miniProjectsData.miniProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);
    
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

  // Handle multiple images or fallback to single image
  const images = project.images || [project.image];

  // Handle Next Image Slide
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous Image Slide
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div className='project-details-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} className='image-slider-container'>
            <div className='slider-wrapper'>
              {images.length > 1 && (
                <button className='slider-button left' onClick={prevImage}>
                  <FaArrowLeft />
                </button>
              )}

              <AnimatePresence mode='wait'>
                <motion.img
                  key={images[currentImageIndex]}
                  src={images[currentImageIndex]}
                  alt={project.title}
                  className='project-image'
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImage;
                  }}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <button className='slider-button right' onClick={nextImage}>
                  <FaArrowRight />
                </button>
              )}
            </div>
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
