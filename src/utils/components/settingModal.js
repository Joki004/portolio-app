import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useElements } from "../functions/context";
import backgroundImage from "../../assets/sam-quek-0qHN3cX1M0U-unsplash.jpg";
import { ReactComponent as ToggleRight } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-toggle-right.svg";
import { ReactComponent as ToggleLeft } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-toggle-left.svg";
export function SettingModal({ show, handleClose, handleShow }) {
  const {
    darkMode,
    updateDarkMode,
    mainColor10Lighter,
    mainColor,
    updateColor,
    updatesideBarBackground,
    backgroundColorBody,
    updateBackgroundColor,
  } = useElements();

  const Modalstyle = {
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "10px",
    },
    Modal: {
      backgroundColor:
        darkMode === true
          ? "var(--dark-theme-surface)"
          : "var(--light-theme-surface)",
      color:
        darkMode === true
          ? "var(--light-theme-surface)"
          : "var(--dark-theme-status-bar)",
    },
    darkMode: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",

      "&>*": {
        gap: "0px",
      },
    },
    darkModeButton: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      cursor: "pointer",
    },
    sideBarBackground: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",

      "&>*": {
        gap: "0px",
      },
    },
    sideBarBackgroundoptions: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      alignItems: "center",
      padding: "10px",
      gap: "10px",
      justifyContent: "space-between",
    },
    sideBarBackgroundButtons: {
      height: "30px",
      width: "70px",
      borderRadius: "8px",
      border: "1px solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      cursor: "pointer",
    },
    outlines: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      cursor: "pointer",
    },
    outlinesBox: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      alignItems: "center",
      padding: "10px",
      gap: "10px",
      justifyContent: "flex-start",
    },
  };

  const handleDrakModeClick = () => {
    updateDarkMode();
  };

  useEffect(() => {}, [darkMode, backgroundColorBody]);

  const colorButtons = [
    { backgroundColorVariable: "var(--primary-color)", colorName: "primary" },
    { backgroundColorVariable: "var(--secondary-color)", colorName: "secondary" },
    { backgroundColorVariable: "var(--quaternary-color)", colorName: "quaternary" },
    { backgroundColorVariable: "var(--quinary-color)", colorName: "quinary" },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ ...Modalstyle.Modal }} closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ ...Modalstyle.Modal }}>
          <div style={{ ...Modalstyle.body }}>
            <div style={{ ...Modalstyle.darkMode }}>
              <p>Dark mode :</p>
              <div>
                {darkMode === true ? (
                  <div
                    style={{ ...Modalstyle.darkModeButton }}
                    onClick={handleDrakModeClick}
                  >
                    <ToggleRight
                      style={{
                        fill: mainColor10Lighter,
                        width: "70px",
                        height: "70px",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{ ...Modalstyle.darkModeButton }}
                    onClick={handleDrakModeClick}
                  >
                  <ToggleLeft
                      style={{
                        fill: mainColor10Lighter,
                        width: "70px",
                        height: "70px",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div style={{ ...Modalstyle.sideBarBackground }}>
              {" "}
              <div>SideBar Background:</div>
              <div style={{ ...Modalstyle.sideBarBackgroundoptions }}>
                {" "}
                <button
                  onClick={() => updatesideBarBackground("regular")}
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    borderColor: darkMode
                      ? "var(--light-theme-surface)"
                      : "var(--dark-theme-status-bar)",
                  }}
                >
                  Regular
                </button>
                <button
                  onClick={() => updatesideBarBackground("color")}
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    backgroundColor: mainColor10Lighter,
                    borderColor: "none",
                  }}
                >
                  color
                </button>
                <button
                  onClick={() => updatesideBarBackground("image")}
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover", // Adjust the size of the background image
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  image
                </button>
              </div>
            </div>
            <div style={{ ...Modalstyle.sideBarBackground }}>
              {" "}
              <div>Background:</div>
              <div style={{ ...Modalstyle.sideBarBackgroundoptions }}>
                {" "}
                <button
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    borderColor: darkMode
                      ? "var(--light-theme-surface)"
                      : "var(--dark-theme-status-bar)",
                  }}
                  onClick={() => updateBackgroundColor("regular")}
                >
                  Regular
                </button>
                <button
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    backgroundColor: mainColor10Lighter,
                    borderColor: "none",
                  }}
                  onClick={() => updateBackgroundColor("paralax")}
                >
                  Paralax
                </button>
              </div>
            </div>

            <div style={{ ...Modalstyle.sideBarBackground }}>
              <div>Colors :</div>
              <span style={{ ...Modalstyle.outlinesBox }}>
                {colorButtons.map(({ backgroundColorVariable, colorName }) => (
                  <button
                    key={colorName} // Unique key for each button
                    style={{
                      ...Modalstyle.outlines,
                      backgroundColor: backgroundColorVariable,
                    }}
                    onClick={() => updateColor(backgroundColorVariable)}
                  ></button>
                ))}
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ ...Modalstyle.Modal }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ backgroundColor: mainColor }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
