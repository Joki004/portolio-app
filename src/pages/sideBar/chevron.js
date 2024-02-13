import { ReactComponent as ChevronLeft } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/solid/bxs-chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/solid/bxs-chevron-right.svg";
import { ReactComponent as VerticalLine } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-dots-vertical-rounded.svg";
import { useElements } from "../../utils/functions/context";
import "../sideBar/sideBar.css";
const Chevron = ({ collapsed, handleCollapsed }) => {
  const {
    sideBarBackgroundMode,
    chevronBackground,
    darkMode,
    mainColor20Lighter,
    mainColor10Lighter,
  } = useElements();
  const tooltipMessage = collapsed ? "Expand sidebar" : "Collapse sidebar";
  const determineSidebarColorChevron = () => {
    if (sideBarBackgroundMode === "color") {
      return chevronBackground;
    } else if (
      sideBarBackgroundMode === "image" ||
      sideBarBackgroundMode === "regular"
    ) {
      return darkMode ? "#b9b9b9" : "var(--light-theme-app-bar)";
    } else {
      return "var(--light-theme-app-bar)";
    }
  };

  const sideBarcollapseDiv = {
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: determineSidebarColorChevron(),
    borderRight: "1px solid",
    borderColor: chevronBackground,
  };
  return (
    <div
      className="chevron-container"
      onClick={handleCollapsed}
      style={sideBarcollapseDiv}
    >
      <VerticalLine
        className="vertical-line"
        style={{ fill: mainColor10Lighter }}
      />
      {collapsed ? (
        <ChevronRight
          className="chevron chevron-right"
          style={{ fill: mainColor20Lighter }}
        />
      ) : (
        <ChevronLeft
          className="chevron chevron-left"
          style={{ fill: mainColor20Lighter }}
        />
      )}
       <span className="tooltip-text">{tooltipMessage}</span>
    </div>
  );
};

export default Chevron;
