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

export function getElementByIdHeightPosition(id) {
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

export function DetermineTitleSectionColor(darkMode, shouldFill, background) {
  if (background.toLowerCase() === "regular") {
    if (darkMode) {
      if (shouldFill || !shouldFill) {
        return "var(--light-theme-surface)";
      }
    } else if (!darkMode) {
      if (!shouldFill) {
        return "var(--dark-theme-status-bar)";
      } else if (shouldFill) {
        return "var(--light-theme-surface)";
      }
    }
  } else {
    return "var(--light-theme-surface)";
  }
}

export function DetermineActiveTitle(sections, activeTile, scrollTop) {
  let checkingActive = "";
  for (const [index, section] of sections.entries()) {
    const position = getElementByIdHeightPosition(section.id);
    if (index === sections.length - 1) {
      if (position.bottom <= window.innerHeight) {
        checkingActive = section.id;
      } else if (position.top < window.innerHeight / 2 && position.top > 0) {
        checkingActive = section.id;
      }
    } else if (index === 0) {
      if ((-10 <= position.top && position.top <= 40) || scrollTop <= 10) {
        checkingActive = section.id;
        break;
      } else if (position.top < window.innerHeight / 2 && position.top > 0) {
        checkingActive = section.id;
        break;
      }
    } else {
      if (position.top < window.innerHeight / 2 && position.top > 0) {
        checkingActive = section.id;
      }
    }
  }
  if (checkingActive === "") {
    return activeTile;
  }
  return checkingActive;
}

export function checks(id) {
  const position = getElementByIdHeightPosition(id);

  return Math.abs(position.bottom - window.innerHeight);
}

export function DetermineTitleWidth(shouldFill, elementWidth) {
  if (shouldFill) {
    if (elementWidth > 244 && elementWidth <= 1000) return "62%";
    else if (elementWidth > 1000) return "22%";
    else return "90%";
  } else {
    if (elementWidth > 244 && elementWidth <= 1000) return "52%";
    else if (elementWidth > 1000) return "17%";
    else return "80%";
  }
}

export const determineSidebarColor = (
  sideBarBackgroundMode,
  mainColor,
  darkMode
) => {
  if (sideBarBackgroundMode === "color") {
    return mainColor;
  } else if (
    sideBarBackgroundMode === "image" ||
    sideBarBackgroundMode === "regular"
  ) {
    return darkMode
      ? "var(--dark-theme-app-bar)"
      : "var(--light-theme-app-bar)";
  } else {
    return "var(--light-theme-app-bar)";
  }
};

export const handleClickScroll = (sectionID) => {
  const element = document.getElementById(sectionID);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const getLastId = (sideBarSections) => {
  const lastItem = sideBarSections[sideBarSections.length - 1];
  return lastItem ? lastItem.id : null;
};

export const getFirstId = (sideBarSections) => {
  const firstItem = sideBarSections[0];
  return firstItem ? firstItem.id : null;
};

export function getFontsizeTitle(type) {
  switch(type){
    case 't1':
      return 'var(--title-t1-font)';
    case 't2':  
      return 'var(--title-t2-font)';
    case 't3':  
      return 'var(--title-t3-font)';
    default:
      return 'var(--title-t1-font)';
  }
}

export function getFontSizeHeader(type) {
  switch (type) {
    case "h1":
      return "var(--header-h1-font)";
    case "h2":
      return "var(--header-h2-font)";
    case "h3":
      return "var(--header-h3-font)";
    case "h4":
      return "var(--header-h4-font)";
    case "h5":
      return "var(--header-h5-font)";
    case "h6":
      return "var(--header-h6-font)";
    default:
      return "var(--header-h1-font)";
  }
}

export function getFontsizeContent(type) {
  switch (type) {
    case "body1":
      return "var(--body-1-font)";
    case "body2":
      return "var(--body-2-font)";
    default:
      return "var(--body-1-font)";
  }
}

export function getBackground(darkMode, background) {
  if (background.toLowerCase() === "regular") {
    if (darkMode) {
      return "var(--dark-theme-background)";
    } else return "var(--light-theme-background)";
  }
  return "var(--dark-theme-background)";
}

export function getTextColor(darkMode, background) {
  if (background.toLowerCase() === "regular") {
    if (darkMode) {
      return "var(--light-theme-surface)";
    } 
    else if(!darkMode){
      return "var(--dark-theme-status-bar)";
    }
  }
  return "var(--light-theme-surface)";
}



