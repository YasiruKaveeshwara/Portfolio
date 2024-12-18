import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../resources/projects.js";
import miniProjects from "../resources/miniProjects.js";
import "../styles/projects.css";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(projects.map(() => 0));
  const [currentImageIndexMini, setCurrentImageIndexMini] = useState(miniProjects.map(() => 0));

  // Handle image navigation
  const handleImageChange = (projectIndex, direction) => {
    setCurrentImageIndex((prevState) =>
      prevState.map((index, i) => {
        if (i === projectIndex) {
          const newIndex =
            direction === "left" ? (index - 1 + projects[i].images.length) % projects[i].images.length : (index + 1) % projects[i].images.length;
          return newIndex;
        }
        return index;
      })
    );
  };
  const handleImageChangeMini = (projectIndex, direction) => {
    setCurrentImageIndexMini((prevState) =>
      prevState.map((index, i) => {
        if (i === projectIndex) {
          const newIndex =
            direction === "left" ? (index - 1 + projects[i].images.length) % projects[i].images.length : (index + 1) % projects[i].images.length;
          return newIndex;
        }
        return index;
      })
    );
  };

  return (
    <div className='projects-page'>
      <div>
        <motion.h2 className='page-title' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          My Projects
        </motion.h2>
        <div className='projects-grid'>
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.projectNo}
              className='project-card'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.projectNo * 0.2 }}>
              <div className='project-image'>
                {project.images.length > 1 && (
                  <button className='image-nav left' onClick={() => handleImageChange(projectIndex, "left")}>
                    &lt;
                  </button>
                )}
                <img src={project.images[currentImageIndex[projectIndex]]} alt={project.name} />
                {project.images.length > 1 && (
                  <button className='image-nav right' onClick={() => handleImageChange(projectIndex, "right")}>
                    &gt;
                  </button>
                )}
              </div>
              <NavLink to={`/projects/${project.name}`} className='view-project-link'>
                <div className='project-info'>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className='project-tags'>
                    {project.tags.map((tag, index) => (
                      <span key={index} className='tag'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <motion.h2
          className='page-title mini-project-title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          My Projects
        </motion.h2>
        <div className='projects-grid'>
          {miniProjects.map((project, projectIndex) => (
            <motion.div
              key={project.projectNo}
              className='project-card'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.projectNo * 0.2 }}>
              <div className='project-image'>
                {project.images.length > 1 && (
                  <button className='image-nav left' onClick={() => handleImageChangeMini(projectIndex, "left")}>
                    &lt;
                  </button>
                )}
                <img src={project.images[currentImageIndexMini[projectIndex]]} alt={project.name} />
                {project.images.length > 1 && (
                  <button className='image-nav right' onClick={() => handleImageChangeMini(projectIndex, "right")}>
                    &gt;
                  </button>
                )}
              </div>
              <div className='project-info'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className='project-tags'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='view-project-link'>
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
