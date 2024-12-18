import React from "react";
import { motion } from "framer-motion"; 
import "./../styles/about.css";
import Skills from "../components/skills";
import photo from "./../assets/images/photo.jpg";

function About() {
  return (
    <div className='pt-8 about-page'>
      <motion.section className='pb-14 about-me' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h2 className='relative flex items-center pb-4 text-3xl font-bold border-r about text-myBlue whitespace-nowrap'>About Me</h2>
        <p className='pb-4 text-lg'>Who Am I,</p>
        <div className='flex items-center gap-8 about-content'>
          <motion.div initial={{ opacity: 0.5, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <img src={photo} className='w-full pic max-w-[300px] rounded-full border-4 border-myBlue' alt='Profile' />
          </motion.div>

          <div className='flex-1 about-description'>
            <p className='text-lg'>
              Hello! I’m Yasiru Kaveeshwara, a passionate Software Engineering student with a keen interest in full-stack development and mobile app
              development. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and mobile development using Flutter and Kotlin. I’m
              dedicated to continuous learning, problem-solving, and developing innovative software solutions that make a meaningful impact.
            </p>
            <p className='text-lg'>
              Throughout my academic journey, I've developed a strong foundation in software engineering, object-oriented programming, database
              management, and UI/UX design. I am always eager to explore new technologies, tools, and methodologies to improve my skills and
              contribute to exciting projects in web, mobile, and software development.
            </p>
          </div>
        </div>
      </motion.section>

      <Skills />

      <motion.section
        className='mb-8 fun-facts'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <h2 className='relative flex items-center pb-8 text-3xl font-bold border-r about text-myBlue whitespace-nowrap'>Fun Facts</h2>
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
