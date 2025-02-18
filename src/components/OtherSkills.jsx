import React, { useState, useEffect } from "react";
import { FaUserTie, FaTools } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";
import "../Styles/OtherSkills.css";

function OtherSkills() {
  const [otherSkills, setOtherSkills] = useState([]);

  useEffect(() => {
    fetch("/resources/otherSkills.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load other skills");
        return response.json();
      })
      .then((jsonData) => {
        console.log("Loaded Other Skills:", jsonData);
        setOtherSkills(jsonData.otherSkills || []);
      })
      .catch((error) => console.error("Error loading other skills data:", error));
  }, []);

  const categoryIcons = {
    "Soft Skills": <FaUserTie className="category-icon" />,
    "Professional & Technical Skills": <FaTools className="category-icon" />,
  };

  return (
    <div className="other-skills-section">
      {otherSkills.length > 0 ? (
        <>
          <div className="other-skills-container">
            {otherSkills.map((category) => (
              <Fade key={category.category} triggerOnce>
                <div className="skill-category-list">
                  <h3 className="category-title">
                    {categoryIcons[category.category] || <FaTools />} {category.category}
                  </h3>
                  <ul className="other-skills-list">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="other-skill-item">
                        <i className={`${skill.icon} other-skill-icon`}></i> {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            ))}
          </div>
        </>
      ) : (
        <p className="loading-text">Loading other skills...</p>
      )}
    </div>
  );
}

export default OtherSkills;
