import React from "react";
import Section from "./sections";
import { sideBarSections } from "../functions/datas";
const SectionDisplay = ({}) => {
  return sideBarSections.map((section) => (
    <Section
      key={section.id}
      title={section.title}
      id={section.id}
     
      content={section.content}
    />
  ));
};

export default SectionDisplay;
