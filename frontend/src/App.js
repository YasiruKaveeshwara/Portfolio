import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header";
import SmoothScroll from "smooth-scroll";
import Projects from "./pages/projects.jsx";

function App() {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
