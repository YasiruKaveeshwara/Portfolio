import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import "../Styles/Experience.css";

function Experience() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/resources/experience.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data.experiences))
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  return (
    <>
      {data ? (
        <div className="section-content-container">
          <Container>
            <VerticalTimeline>
              {data.map((item, index) => (
                <motion.div
                  key={item.title + item.dateText}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: index * 0.2 }, // 1s delay per item
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={item.dateText}
                    dateClassName="timeline-date"
                  >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    {item.workType && <h5 className="work-type">&nbsp;· {item.workType}</h5>}

                    <ul className="work-description">
                      {item.workDescription.map((point, idx) => (
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

export default Experience;
