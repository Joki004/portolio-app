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
    let checkingActive ='';
  for (const [index, section] of sections.entries()) {
    const position = getElementbyIdHeightPostion(section.id);

    
   // console.log(`${checkingActive} ${index} ${section.id} ${position.top} ${position.bottom} ${window.innerHeight}`);

    if (index === sections.length - 1) {
      //console.log(Math.abs(position.bottom - window.innerHeight));
      if (position.bottom <= window.innerHeight) {
        checkingActive = section.id;
      }
      if (position.top < window.innerHeight / 2 && position.top > 0) {
        checkingActive = section.id;
      }
    } else {
      if (position.top < window.innerHeight / 2 && position.top > 0) {
        checkingActive = section.id;
      }
    }
  }
  if (checkingActive === '') {
    return activeTile;
  }
  return checkingActive;
}

export function checks(id) {
  const position = getElementbyIdHeightPostion(id);

  return Math.abs(position.bottom - window.innerHeight);
}

export function DetermineTitleWidth(shouldFill, elementWidth) {
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
