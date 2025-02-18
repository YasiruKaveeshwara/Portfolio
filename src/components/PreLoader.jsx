import React from "react";
import "../Styles/PreLoader.css";

function PreLoader() {
  return (
    <div id="preloader">
      <div className="loader-container">
        <div className="loader-circle"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}

export default PreLoader;
