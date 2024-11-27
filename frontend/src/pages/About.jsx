import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Adding Framer Motion for animations
import "./../styles/About.css";
import photo from "./../assets/images/photo.jpg";

function About() {
  useEffect(() => {
    const heading = document.querySelector("h2.about");
    heading.addEventListener("animationend", () => {
      heading.style.borderRight = "none";
    });
    

    return () => heading.removeEventListener("animationend", () => {}); // Cleanup
  }, []);

  return (
    <div className="about-page">
      {/* About Me Section */}
      <motion.section
        className="about-me fade-in"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="about">About Me</h2>
        <p>Who Am I,</p>
        <div className="about-content">
          <img src={photo} className="pic" alt="Profile picture of Yasiru Kaveeshwara" />
          <div className="about-description">
            <p>
              Hello! I’m Yasiru Kaveeshwara, a passionate Software Engineering student with a keen
              interest in full-stack development and mobile app development. I specialize in the
              MERN stack (MongoDB, Express, React, Node.js) and mobile development using Flutter and
              Kotlin. I’m dedicated to continuous learning, problem-solving, and developing
              innovative software solutions that make a meaningful impact.
            </p>
            <p>
              Throughout my academic journey, I've developed a strong foundation in software
              engineering, object-oriented programming, database management, and UI/UX design. I am
              always eager to explore new technologies, tools, and methodologies to improve my
              skills and contribute to exciting projects in web, mobile, and software development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Skills</h2>
        <ul>
          <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
          <li>Flutter & Firebase for mobile app development</li>
          <li>JavaScript (ES6+), TypeScript, HTML & CSS</li>
          <li>Java & Kotlin for mobile and backend development</li>
          <li>API Integration and Cloud Services</li>
          <li>UI/UX Design & Agile Methodologies</li>
          <li>Database Management (MySQL, MongoDB, Oracle, Firebase)</li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </motion.section>

      {/* Fun Facts Section */}
      <motion.section
        className="fun-facts"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Fun Facts</h2>
        <ul>
          <li>I’m an avid gamer and enjoy streaming in my free time.</li>
          <li>Science fiction movies and podcasts fuel my creativity.</li>
          <li>I built a weather app for fun, and it’s now a go-to for my friends.</li>
          <li>I can solve a Rubik’s Cube in under 2 minutes!</li>
        </ul>
      </motion.section>
    </div>
  );
}

export default About;
