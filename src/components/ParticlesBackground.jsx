import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../Styles/ParticlesBackground.css";

const ParticlesBackground = () => {
  const [particlesConfig, setParticlesConfig] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/resources/particleConfig.json")
      .then((response) => response.json())
      .then((data) => setParticlesConfig(data))
      .catch((error) => console.error("Error loading particles configuration:", error));
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine loaded:", engine);
    await loadSlim(engine);
  }, []);

  return (
    <div className='background-layer'>
      {particlesConfig && <Particles id='tsparticles' init={particlesInit} options={particlesConfig} />}
    </div>
  );
};

export default ParticlesBackground;
