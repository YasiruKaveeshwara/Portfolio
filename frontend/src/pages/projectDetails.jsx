import React from "react";
import { useParams } from "react-router-dom";
import projects from "../resources/projects";
import "../styles/projectDetails.css";

function ProjectDetails() {
  const { name } = useParams();
  const project = projects.find((proj) => proj.name === name);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <h1 className='relative flex items-center text-3xl font-bold border-r projectD-title text-myBlue whitespace-nowrap'  >{project.name}</h1>
      <p>{project.description}</p>

      <div>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.name} screenshot ${index + 1}`} />
        ))}
      </div>

      <div>
        <h3>Tags:</h3>
        <ul>
          {project.tags.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={project.link} target='_blank' rel='noopener noreferrer'>
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectDetails;
