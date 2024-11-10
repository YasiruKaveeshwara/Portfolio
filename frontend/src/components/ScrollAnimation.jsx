import { useEffect } from "react";

const ScrollAnimation = (ref) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);
};

export default ScrollAnimation;
