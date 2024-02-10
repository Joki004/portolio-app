import "./skills.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useElements } from "../../utils/functions/context";
import { getFontSizeHeader } from "../../utils/functions/function";

const Skills = ({ skillsData }) => {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
  const {
    mainColor,
    mainColor10Lighter,
    mainColor20Lighter,
    darkMode,
    backgroundColorBody,
  } = useElements();
  const handleCategoryHover = (index) => {
    setHoveredCategoryIndex(index);
  };

  const handleCategoryLeave = () => {
    setHoveredCategoryIndex(null);
  };

  const getTitleStyles = (index) => {
    return {
      backgroundColor:
        hoveredCategoryIndex === index ? mainColor10Lighter : "transparent",
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
        <div
          key={index}
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
                style={{
                  ...getSkillBoxStyles(index, idx),
                }}
              >
                <li>
                  {skill.logo}
                  <box-icon
                    name={skill.nameBoxIcon}
                    type={skill.typeBoxIcon}
                    color={darkMode ? "white" : "black"}
                    size={"50px"}
                  />
                </li>
                <li>{skill.name}</li>
              </motion.div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
