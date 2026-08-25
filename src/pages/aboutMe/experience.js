import React, { useState } from "react";
import { useElements } from "../../utils/functions/context";
import {
  getFontsizeContent,
  getFontSizeHeader,
} from "../../utils/functions/function";
import { CustomIcon } from "../../utils/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import "./aboutMe.css";

const Experience = ({ sections = [], title }) => {
  const {
    mainColor,
    windowWidth,
    mainColor10Lighter,
    mainColor20Lighter,
    darkMode,
  } = useElements();
  const [expandedEntries, setExpandedEntries] = useState({
    "professional-0": true,
  });
  const isDesktop = windowWidth > 768;

  const toggleEntry = (entryKey) => {
    setExpandedEntries((current) => ({
      ...current,
      [entryKey]: !current[entryKey],
    }));
  };

  const styles = {
    wrapper: {
      width: "100%",
      maxWidth: "1400px",
    },
    h1: {
      fontSize: getFontSizeHeader("h1"),
      fontWeight: "bold",
      textDecoration: "underline",
      margin: "20px 0 42px",
    },
    section: {
      marginBottom: "48px",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "22px",
    },
    sectionAccent: {
      width: "42px",
      height: "5px",
      borderRadius: "999px",
      backgroundColor: mainColor,
      flexShrink: 0,
    },
    sectionTitle: {
      margin: 0,
      fontSize: getFontSizeHeader("h2"),
      fontWeight: 700,
    },
    timeline: {
      position: "relative",
      paddingLeft: isDesktop ? "38px" : "26px",
    },
    timelineLine: {
      position: "absolute",
      top: "4px",
      bottom: "4px",
      left: isDesktop ? "10px" : "7px",
      width: "2px",
      backgroundColor: mainColor20Lighter,
    },
    entry: {
      position: "relative",
      marginBottom: "16px",
    },
    circle: {
      position: "absolute",
      top: "25px",
      left: isDesktop ? "-35px" : "-24px",
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      backgroundColor: mainColor,
      boxShadow: `0 0 0 4px ${darkMode ? "#303030" : "#ffffff"}`,
      zIndex: 1,
    },
    card: {
      border: `1px solid ${mainColor20Lighter}`,
      borderRadius: "16px",
      overflow: "hidden",
      backgroundColor: darkMode
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(24, 51, 161, 0.025)",
    },
    headerButton: {
      width: "100%",
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      alignItems: isDesktop ? "center" : "flex-start",
      gap: isDesktop ? "18px" : "10px",
      padding: isDesktop ? "18px 20px" : "16px",
      border: "none",
      background: "transparent",
      color: "inherit",
      textAlign: "left",
      cursor: "pointer",
      fontFamily: "inherit",
    },
    date: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "36px",
      padding: "6px 14px",
      color: "white",
      borderRadius: "999px",
      whiteSpace: "nowrap",
      fontSize: getFontsizeContent("body2"),
      backgroundColor: mainColor10Lighter,
      flexShrink: 0,
    },
    infos: {
      minWidth: 0,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
    organizationRow: {
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      gap: "6px 10px",
    },
    organization: {
      fontSize: getFontsizeContent("body1"),
      fontWeight: "bold",
    },
    location: {
      fontSize: getFontsizeContent("body2"),
      opacity: 0.72,
    },
    position: {
      fontSize: getFontsizeContent("body2"),
      fontStyle: "italic",
    },
    currentBadge: {
      display: "inline-flex",
      width: "fit-content",
      marginTop: "4px",
      padding: "3px 9px",
      borderRadius: "999px",
      color: mainColor,
      border: `1px solid ${mainColor20Lighter}`,
      fontSize: "0.78rem",
      fontWeight: 700,
      fontStyle: "normal",
    },
    iconBox: {
      alignSelf: isDesktop ? "center" : "flex-end",
      flexShrink: 0,
    },
    details: {
      padding: isDesktop ? "0 20px 20px" : "0 16px 16px",
      borderTop: `1px solid ${mainColor20Lighter}`,
    },
    summary: {
      margin: "16px 0 10px",
      fontSize: getFontsizeContent("body2"),
      lineHeight: 1.6,
    },
    highlights: {
      margin: "8px 0 14px",
      paddingLeft: "22px",
      fontSize: getFontsizeContent("body2"),
      lineHeight: 1.55,
    },
    highlight: {
      marginBottom: "7px",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    tag: {
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: mainColor20Lighter,
      color: "white",
      fontSize: "0.8rem",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.h1}>{title}</h1>

      {sections.map((section) => (
        <section key={section.id} style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionAccent} aria-hidden="true" />
            <h2 style={styles.sectionTitle}>{section.title}</h2>
          </div>

          <div style={styles.timeline}>
            <span style={styles.timelineLine} aria-hidden="true" />

            {section.entries.map((entry, index) => {
              const entryKey = `${section.id}-${index}`;
              const isExpanded = Boolean(expandedEntries[entryKey]);

              return (
                <article key={entryKey} style={styles.entry}>
                  <span style={styles.circle} aria-hidden="true" />
                  <div style={styles.card}>
                    <button
                      type="button"
                      style={styles.headerButton}
                      onClick={() => toggleEntry(entryKey)}
                      aria-expanded={isExpanded}
                      aria-controls={`${entryKey}-details`}
                    >
                      <span style={styles.date}>{entry.date}</span>
                      <span style={styles.infos}>
                        <span style={styles.organizationRow}>
                          <span style={styles.organization}>
                            {entry.organization}
                          </span>
                          {entry.location && (
                            <span style={styles.location}>{entry.location}</span>
                          )}
                        </span>
                        <span style={styles.position}>{entry.position}</span>
                        {entry.current && (
                          <span style={styles.currentBadge}>Current</span>
                        )}
                      </span>
                      <span style={styles.iconBox} aria-hidden="true">
                        <CustomIcon
                          iconName={isExpanded ? "arrowUpIcon" : "arrowDownIcon"}
                          boxsize="30px"
                          colorIcon={mainColor}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`${entryKey}-details`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={styles.details}>
                            {entry.summary && (
                              <p style={styles.summary}>{entry.summary}</p>
                            )}
                            {entry.highlights?.length > 0 && (
                              <ul style={styles.highlights}>
                                {entry.highlights.map((highlight) => (
                                  <li key={highlight} style={styles.highlight}>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {entry.tags?.length > 0 && (
                              <div style={styles.tags}>
                                {entry.tags.map((tag) => (
                                  <span key={tag} style={styles.tag}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Experience;