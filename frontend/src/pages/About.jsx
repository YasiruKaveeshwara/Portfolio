import React, { useEffect } from "react";
import "./../styles/About.css";
import photo from "./../assets/images/photo.jpg";

function About() {
  // Using React's useEffect hook for cursor removal after typing effect
  useEffect(() => {
    const heading = document.querySelector("h2.about");

    // Set timeout to remove the cursor (border-right) after 4 seconds (3s typing + 1s for blinks)
    const cursorTimeout = setTimeout(() => {
      if (heading) heading.style.borderRight = "none";
    }, 4000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(cursorTimeout);
  }, []);

  return (
    <div className="about-page">
      {/* About Me Section */}
      <section className="about-me fade-in">
        <h2 className="about">About Me</h2>
        <p>Who Am I,</p>
        <div className="about-content">
          <img src={photo} className="pic" alt="Profile-Pic" />
          <div className="about-description">
            <p>
              Hello! I’m Yasiru Kaveeshwara, a passionate Software Engineering student with a keen interest in full-stack development and mobile app
              development. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and mobile development using Flutter and Kotlin. I’m
              dedicated to continuous learning, problem-solving, and developing innovative software solutions that make a meaningful impact.
            </p>
            <p>
              Throughout my academic journey, I've developed a strong foundation in software engineering, object-oriented programming, database
              management, and UI/UX design. I am always eager to explore new technologies, tools, and methodologies to improve my skills and
              contribute to exciting projects in web, mobile, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills fade-in">
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
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts fade-in">
        <h2>Fun Facts</h2>
        <ul>
          <li>I’m an avid gamer and enjoy streaming in my free time.</li>
          <li>Science fiction movies and podcasts fuel my creativity.</li>
          <li>I built a weather app for fun, and it’s now a go-to for my friends.</li>
          <li>I can solve a Rubik’s Cube in under 2 minutes!</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
