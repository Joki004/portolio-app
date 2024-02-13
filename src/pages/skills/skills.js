import "./skills.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useElements } from "../../utils/functions/context";
import { getFontSizeHeader } from "../../utils/functions/function";

const Skills = ({ skillsData }) => {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
  const { mainColor10Lighter, mainColor20Lighter, darkMode } = useElements();
  const handleCategoryHover = (index) => {
    setHoveredCategoryIndex(index);
  };

  const handleCategoryLeave = () => {
    setHoveredCategoryIndex(null);
  };
  function setTitleColor(index, darkMode) {
    if (darkMode || index === hoveredCategoryIndex) {
      return "white";
    }
    return "black";
  }
  const getTitleStyles = (index) => {
    return {
      backgroundColor:
        hoveredCategoryIndex === index ? mainColor10Lighter : "transparent",
      color: setTitleColor(index, darkMode),
    };
  };

  const handleSkillBoxHover = (categoryIndex, skillIndex) => {
    setHoveredSkillIndex({ categoryIndex, skillIndex });
  };

  const handleSkillBoxLeave = () => {
    setHoveredSkillIndex(null);
  };

  const getSkillBoxStyles = (categoryIndex, skillIndex) => {
    const borderBottom =
      hoveredSkillIndex &&
      hoveredSkillIndex.categoryIndex === categoryIndex &&
      hoveredSkillIndex.skillIndex === skillIndex
        ? `5px solid ${mainColor20Lighter}`
        : "1px solid #ccc";
    return { borderBottom };
  };
  const styles = {
    title: {
      fontSize: getFontSizeHeader("h2"),
      transition: "all 0.3s ease",
    },
  };

  return (
    <div className="grid-container">
      {skillsData.map((category, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            // Render the first category to take full width
            <div
              className="category"
              onMouseEnter={() => handleCategoryHover(index)}
              onMouseLeave={handleCategoryLeave}
            >
              <h2 style={{ ...styles.title, ...getTitleStyles(index) }}>
                {category.type}
              </h2>
              <ul className="skills">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skillsBox"
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => handleSkillBoxHover(index, idx)}
                    onMouseLeave={handleSkillBoxLeave}
                    style={getSkillBoxStyles(index, idx)}
                  >
                    <li>
                      {skill.logo}
                      {skill.SvgComponent && (
                        <skill.SvgComponent
                          style={{ width: "50px", height: "50px", fill: darkMode ? "white" : "black" }}
                        />
                      )}
                    </li>
                    <li>{skill.name}</li>
                  </motion.div>
                ))}
              </ul>
            </div>
          ) : null}
        </React.Fragment>
      ))}

      <div className="category-flex-container">
        {skillsData.slice(1).map((category, index) => (
          <div
            key={index + 1}
            className="category"
            onMouseEnter={() => handleCategoryHover(index + 1)}
            onMouseLeave={handleCategoryLeave}
          >
            <h2 style={{ ...styles.title, ...getTitleStyles(index + 1) }}>
              {category.type}
            </h2>
            <ul className="skills">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="skillsBox"
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => handleSkillBoxHover(index + 1, idx)}
                  onMouseLeave={handleSkillBoxLeave}
                  style={getSkillBoxStyles(index + 1, idx)}
                >
                  <li>
                    {skill.logo}
                    {skill.SvgComponent && (
                      <skill.SvgComponent
                        style={{ width: "50px", height: "50px", fill: darkMode ? "white" : "black"}}
                      />
                    )}
                  </li>
                  <li>{skill.name}</li>
                </motion.div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
