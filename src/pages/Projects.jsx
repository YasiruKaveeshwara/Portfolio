import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { Fade, Zoom } from "react-awesome-reveal";
import ProjectCard from "../components/ProjectCard";
import PreLoader from "../components/PreLoader";
import "../Styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [miniProjects, setMiniProjects] = useState([]);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreMiniProjects, setShowMoreMiniProjects] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await fetch("/resources/projects.json");
        const projectsData = await projectsResponse.json();
        setProjects(projectsData.projects || []);

        const miniProjectsResponse = await fetch("/resources/miniProjects.json");
        const miniProjectsData = await miniProjectsResponse.json();
        setMiniProjects(miniProjectsData.miniProjects || []);
      } catch (error) {
        console.error("Error loading project data:", error);
      }
    };

    fetchProjects();
  }, []);

  const numProjectsToShow = showMoreProjects ? projects.length : Math.min(6, projects.length);
  const numMiniProjectsToShow = showMoreMiniProjects ? miniProjects.length : Math.min(6, miniProjects.length);

  // ✅ Function to handle project click
  const handleProjectClick = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug
    navigate(`/project/${slug}`); // Navigate to the project details page
  };

  return (
    <div className='section-content-container-projects'>
      <Container>
        <Zoom>
          <h2 className='section-title-projects'>🚀 Featured Projects</h2>
        </Zoom>

        <div className='projects-wrapper'>
          {projects.length > 0 ? (
            <>
              <Row xs={1} sm={1} md={2} lg={3} className='g-4 project-row'>
                {projects.slice(0, numProjectsToShow).map((project) => (
                  <Fade key={project.title} triggerOnce>
                    <div className='project-card-wrapper' onClick={() => handleProjectClick(project.title)}>
                      <ProjectCard project={project} />
                    </div>
                  </Fade>
                ))}
              </Row>

              {projects.length > 6 && (
                <div className='button-wrapper'>
                  <Button className='show-more-button' onClick={() => setShowMoreProjects(!showMoreProjects)}>
                    {showMoreProjects ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <PreLoader load={true} />
          )}
        </div>

        <Fade>
          <h2 className='section-title-projects'>💡 Mini Projects</h2>
        </Fade>

        <div className='projects-wrapper'>
          {miniProjects.length > 0 ? (
            <>
              <Row xs={1} sm={1} md={2} lg={3} className='g-4 project-row'>
                {miniProjects.slice(0, numMiniProjectsToShow).map((project) => (
                  <Fade key={project.title} triggerOnce>
                    <div className='project-card-wrapper' onClick={() => handleProjectClick(project.title)}>
                      <ProjectCard project={project} />
                    </div>
                  </Fade>
                ))}
              </Row>

              {miniProjects.length > 6 && (
                <div className='button-wrapper'>
                  <Button className='show-more-button' onClick={() => setShowMoreMiniProjects(!showMoreMiniProjects)}>
                    {showMoreMiniProjects ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <PreLoader load={true} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
