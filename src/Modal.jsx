/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background-color: white;
  padding: 16px;
  z-index: 1000;
  width: 30%;
`;

export default function Modal({
  isFormValid,
  isOpen,
  onClose,
  children,
  inputs,
  panelColors,
  bagSize,
}) {
  const [focusedElementBeforeModal, setFocusedElementBeforeModal] =
    useState(null);

  //Checking which panel colours are unselected depending on bagSize
  const adjustPanelColors = (bagSize, panelColors) => {
    let adjustedColors;
    if (bagSize === "Full Frame" || bagSize === "Half Frame") {
      adjustedColors = panelColors.slice(0, 4);
    } else if (bagSize === "Double Whammy") {
      adjustedColors = panelColors.slice(0, 8);
    } else if (bagSize === "Full Frame 2 Zip") {
      adjustedColors = panelColors.slice(0, 6);
    } else {
      adjustedColors = panelColors; // Default case
    }
    // Map over the adjustedColors array and replace '#FFF' values
    const removeChosenColors = adjustedColors.map((color, index) =>
      color === "#FFF" ? `Panel Colour for Section ${index + 1}` : null
    );
    const emptyColors = removeChosenColors.filter((color) => color !== null);

    return emptyColors;
  };

  const emptyPanelColors = useMemo(
    () => adjustPanelColors(bagSize, panelColors),
    [bagSize, panelColors]
  );

  //Checking for unfilled inputs
  const emptyKeys = useMemo(
    () =>
      Object.keys(inputs)
        .filter((key) => inputs[key] === "" && key !== "mountingDetails")
        .map((key) => (key === "bikeSize" ? "Bike Size" : key))
        .map((key) =>
          key
            .toLowerCase()
            .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase())
        ),
    [inputs]
  );

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Disable focus on elements outside the dialog when the modal is open
    const handleFocus = (event) => {
      const dialog = document.querySelector("dialog");
      if (dialog && !dialog.contains(event.target)) {
        event.preventDefault();
        dialog.focus();
      }
    };

    if (isOpen) {
      setFocusedElementBeforeModal(document.activeElement);
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("focus", handleFocus, true);
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("focus", handleFocus, true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("focus", handleFocus, true);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <ModalOverlay />
            <Dialog
              open
              aria-modal="true"
              aria-labelledby="dialog-title"
              className="modal-dialog"
            >
              <h2 id="dialog-title">Hey!</h2>

              <div className="modal-content">
                {isFormValid ? (
                  <p>
                    Your order info has been submitted! <br />
                    Please schedule a time to come by our studio to have your
                    bike measured OR create a template of your bag at home and
                    mail it to the following address: <br></br> HMPL <br></br>
                    432 Columbia st.<br></br>
                    Vancouver, BC, Canada<br></br> V6A2R8
                  </p>
                ) : (
                  <>
                    <p>
                      Please complete all required inputs. We&apos;re missing
                      the following info:
                    </p>

                    {emptyKeys.length > 0 && (
                      <ul>
                        {emptyKeys.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    )}
                    {emptyPanelColors.length > 0 && (
                      <ul>
                        {emptyPanelColors.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
              <button onClick={onClose} className="close-button">
                Ok
              </button>
            </Dialog>
          </>,
          document.body
        )}
    </>
  );
}
