import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import projects from "../resources/projects.js"; // Import your resources file
import "../styles/projects.css"; // Import styles

export default function Projects() {
  // State to manage the current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0) // Initialize an array of indices with 0
  );

  // Handle image navigation
  const handleImageChange = (projectIndex, direction) => {
    setCurrentImageIndex((prevState) =>
      prevState.map((index, i) => {
        if (i === projectIndex) {
          const newIndex =
            direction === "left"
              ? (index - 1 + projects[i].images.length) % projects[i].images.length
              : (index + 1) % projects[i].images.length;
          return newIndex;
        }
        return index;
      })
    );
  };

  return (
    <div className="projects-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.projectNo}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: project.projectNo * 0.2 }}
          >
            <div className="project-image">
              {/* Left arrow */}
              {project.images.length > 1 && (
                <button
                  className="image-nav left"
                  onClick={() => handleImageChange(projectIndex, "left")}
                >
                  &lt;
                </button>
              )}
              {/* Current image */}
              <img
                src={project.images[currentImageIndex[projectIndex]]}
                alt={project.name}
              />
              {/* Right arrow */}
              {project.images.length > 1 && (
                <button
                  className="image-nav right"
                  onClick={() => handleImageChange(projectIndex, "right")}
                >
                  &gt;
                </button>
              )}
            </div>
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-link"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
}
