import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Zoom } from "react-awesome-reveal";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import PreLoader from "../components/PreLoader";
import "../Styles/Education.css";

function Education() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/resources/education.json")
      .then((response) => response.json())
      .then((data) => setData(data.education))
      .catch((error) => console.error("Error loading education data:", error));
  }, []);

  return (
    <>
      {data ? (
        <div className='section-content-container'>
          <Container>
            <Zoom>
              <h2 className='section-title'>🎓 My Education</h2>
            </Zoom>
            <VerticalTimeline>
              {data.map((item, index) => (
                <motion.div
                  key={item.degree + item.institution}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                  viewport={{ once: true, amount: 0.2 }}>
                  <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date={item.year}
                    dateClassName='timeline-date'
                    icon={<FaGraduationCap className='timeline-icon' />}>
                    <h3 className='vertical-timeline-element-title'>{item.degree}</h3>
                    <h4 className='vertical-timeline-element-subtitle'>{item.institution}</h4>
                    {item.grade && <h5 className='education-grade'>· {item.grade}</h5>}

                    <ul className='education-description'>
                      {item.description.map((point, idx) => (
                        <li key={idx}>
                          <ReactMarkdown children={point} components={{ p: "span" }} />
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                </motion.div>
              ))}
            </VerticalTimeline>
          </Container>
        </div>
      ) : (
        <PreLoader load={true} />
      )}
    </>
  );
}

export default Education;
