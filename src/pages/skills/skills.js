import "./skills.css";
import React from "react";
import { motion } from "framer-motion";
import { useElements } from "../../utils/functions/context";

const experienceLabels = {
  work: "Used at work",
  projects: "Used in projects",
  developing: "Developing",
  foundation: "Foundation",
};

const getInitials = (name) =>
  name
    .split(/[\s/.&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Skills = ({ skillsData = [] }) => {
  const { mainColor, mainColor10Lighter, darkMode } = useElements();

  return (
    <section
      className={`skills-section ${darkMode ? "skills-section--dark" : ""}`}
      style={{
        "--skills-accent": mainColor,
        "--skills-accent-light": mainColor10Lighter,
      }}
    >
      <header className="skills-intro">
        <span className="skills-eyebrow">Technical profile</span>
        <h2>Skills developed through work and real projects.</h2>
        <p>
          A practical stack spanning software development, databases, cloud,
          analytics and enterprise automation.
        </p>

        <div className="skills-legend" aria-label="Experience labels">
          {Object.entries(experienceLabels).map(([key, label]) => (
            <span key={key} className={`experience-badge experience-${key}`}>
              {label}
            </span>
          ))}
        </div>
      </header>

      <div className="skills-category-grid">
        {skillsData.map((category) => (
          <article className="skills-category-card" key={category.type}>
            <div className="skills-category-heading">
              <h3>{category.type}</h3>
              <p>{category.description}</p>
            </div>

            <div className="skills-list">
              {category.skills.map((skill) => {
                const Icon = skill.SvgComponent;

                return (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.16 }}
                  >
                    <span className="skill-icon" aria-hidden="true">
                      {Icon ? <Icon /> : getInitials(skill.name)}
                    </span>

                    <span className="skill-details">
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className={`experience-badge experience-${skill.experience}`}
                      >
                        {experienceLabels[skill.experience]}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;