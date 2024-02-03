import { useEffect, useState } from "react";
export const useLocalStorageState = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    const storedItem = localStorage.getItem(key);
    if (storedItem !== null) {
      setValue(JSON.parse(storedItem));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export function getElementbyIdHeightPostion(id) {
  const element = document.getElementById(id);
  if (element) {
    const { top, bottom } = element.getBoundingClientRect();
    return { top, bottom };
  }
  return { top: 0, bottom: 0 };
}

export function DetermineTexColor(darkMode) {
  if (darkMode) {
    return "var(--light-theme-surface)";
  } else return "var(--dark-theme-surface)";
}

export function DetermineTitleSectionColor(darkMode, shoudFill) {
  if (darkMode) {
    return "var(--light-theme-surface)";
  } else {
    if (shoudFill) {
      return "var(--light-theme-surface)";
    } else return "var(--dark-theme-surface)";
  }
}

export function DetermineActiveTitle(sections, activeTile) {
  for (const [index, section] of sections.entries()) {
    const position = getElementbyIdHeightPostion(section.id);
    //console.log(`Position for ${section.id}:`, position, window.innerHeight);
    if (position.top < window.innerHeight / 2 && position.top > 0) {
      return section.id;
    }
    if (
      index === sections.length - 1 &&
      position.bottom === window.innerHeight
    ) {
      return section.id;
    }
  }

  return activeTile;
}

export function DetermineTitleWidth(shouldFill, elementWidth) {
  console.log(`elementWidth: ${elementWidth}`);
  if (shouldFill) {
    if (elementWidth > 244 && elementWidth <= 1000) return "60%";
    else if (elementWidth > 1000) return "20%";
    else return "90%";
  } else {
    if (elementWidth > 244 && elementWidth <= 1000) return "50%";
    else if (elementWidth > 1000) return "15%";
    else return "80%";
  }
}
