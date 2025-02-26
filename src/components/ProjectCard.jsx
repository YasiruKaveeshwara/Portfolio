import React, { useState } from "react";
import { Button, Card, Badge, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 8'%3E%3Crect width='16' height='9' fill='%23ddd' fill-opacity='0.2'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23aaa' font-size='1'%3ENo Image%3C/text%3E%3C/svg%3E"; // ✅ 16/9 styled square as a fallback image with 0.2 transparency and "NO IMAGE" text

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  // ✅ Limit bodyText to only first 3 bullet points
  const trimmedBodyText = project.bodyText
    .split("\n")
    .slice(0, 3)
    .join("\n");

  return (
    <Col>
      <Card className="project-card">
        {/* ✅ Show only the first image, otherwise fallback */}
        <div className="project-card-img-container">
          <img
            src={!imageError && project?.images?.length > 0 ? project.images[0] : fallbackImage} // ✅ Use fallback if image fails
            className="project-card-img"
            alt={project.title}
            onError={() => setImageError(true)} // ✅ If image fails, set error state
          />
        </div>

        <Card.Body>
          <Card.Title className="project-card-title">{project.title}</Card.Title>
          <Card.Text className="project-card-text">
            <ReactMarkdown>{trimmedBodyText}</ReactMarkdown>
          </Card.Text>
        </Card.Body>

        {project?.links?.length > 0 && (
          <Card.Body className="project-card-links">
            {project.links.map((link) => (
              <Button key={link.href} className="project-card-button" onClick={() => window.open(link.href, "_blank")}>
                {link.text === "GitHub" ? <FaGithub className="icon" /> : <FaExternalLinkAlt className="icon" />}
                {link.text}
              </Button>
            ))}
          </Card.Body>
        )}

        {project.tags && (
          <Card.Footer className="project-card-footer">
            {project.tags.map((tag) => (
              <Badge key={tag} className="project-card-badge">
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
    images: PropTypes.arrayOf(PropTypes.string),
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
