import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


import Home from "./pages/Home";
import Skill from "./pages/Skillset";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ProjectDetails from "./pages/ProjectDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBackground from "./components/ParticlesBackground";

import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching resources)
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Router>
      <div className='App'>
        <ParticlesBackground />
        <Navbar />
        <ScrollToTop />

        <div className='main-wrapper'>
          {loading ? (
            <Preloader />
          ) : (
            <div className='main-content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/skillset' element={<Skill />} />
                <Route path='/project' element={<Project />} />
                <Route path='/project/:slug' element={<ProjectDetails />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/education' element={<Education />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
