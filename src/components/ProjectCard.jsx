import React from "react";
import { Button, Card, Badge, Col } from "react-bootstrap";

import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <Col>
      <Card className='project-card'>
        {project?.image && <img variant='top' src={project.image} className='project-card-img' alt={project.title} />}
        <Card.Body>
          <Card.Title className='project-card-title'>{project.title}</Card.Title>
          <Card.Text className='project-card-text'>
            <ReactMarkdown>{project.bodyText}</ReactMarkdown>
          </Card.Text>
        </Card.Body>

        {project?.links?.length > 0 && (
          <Card.Body className='project-card-links'>
            {project.links.map((link) => (
              <Button key={link.href} className='project-card-button' onClick={() => window.open(link.href, "_blank")}>
                {link.text === "GitHub" ? <FaGithub className="icon" /> : <FaExternalLinkAlt className="icon" />}{link.text}
              </Button>
            ))}
          </Card.Body>
        )}

        {project.tags && (
          <Card.Footer className='project-card-footer'>
            {project.tags.map((tag) => (
              <Badge key={tag} className='project-card-badge'>
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
