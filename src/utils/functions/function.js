import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useElementsColor } from "./context";
export const useLocalStorageState = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
  // console.log(`Key: ${key}, Stored Value: ${storedValue}`);
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

export function SettingModal({ show, handleClose, handleShow }) {
  const { darkMode, updateDarkMode, mainColor10Lighter } = useElementsColor();

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
            <div>
              {" "}
              <div>SideBar Background:</div>
              <p>Regular</p>
              <p>color</p>
              <p>image</p>
            </div>

            <div>backgrounds :</div>
            <div></div>
            <div>Colors :</div>
            <div></div>
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
