import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useElements } from "../functions/context";
import backgroundImage from "../../assets/sam-quek-0qHN3cX1M0U-unsplash.jpg";

export function SettingModal({ show, handleClose, handleShow }) {
  const {
    darkMode,
    updateDarkMode,
    mainColor10Lighter,
    updateColor,
    updatesideBarBackground,
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

  useEffect(() => {
    console.log(`dark mode : ${darkMode}`);
  }, [darkMode]);

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
                    <box-icon
                      name="toggle-right"
                      size="70px"
                      type="solid"
                      color={mainColor10Lighter}
                    ></box-icon>
                  </div>
                ) : (
                  <div
                    style={{ ...Modalstyle.darkModeButton }}
                    onClick={handleDrakModeClick}
                  >
                    <box-icon
                      name="toggle-left"
                      size="70px"
                      type="solid"
                      color={mainColor10Lighter}
                    ></box-icon>
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
                >
                  Regular
                </button>
                <button
                  style={{
                    ...Modalstyle.sideBarBackgroundButtons,
                    backgroundColor: mainColor10Lighter,
                    borderColor: "none",
                  }}
                >
                  Paralax
                </button>
              </div>
            </div>

            <div style={{ ...Modalstyle.sideBarBackground }}>
              <div>Colors :</div>
              <span style={{ ...Modalstyle.outlinesBox }}>
                {" "}
                <button
                  style={{
                    ...Modalstyle.outlines,
                    backgroundColor: "var(--primary-color)",
                  }}
                  onClick={() => updateColor("var(--primary-color)")}
                ></button>
                <button
                  style={{
                    ...Modalstyle.outlines,
                    backgroundColor: "var(--secondary-color)",
                  }}
                  onClick={() => updateColor("var(--secondary-color)")}
                ></button>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ ...Modalstyle.Modal }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
