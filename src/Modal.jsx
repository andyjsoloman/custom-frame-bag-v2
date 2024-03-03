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
  z-index: 999; /* Ensure the overlay is below the modal */
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
`;

export default function Modal({ isOpen, onClose, children, inputs }) {
  const [focusedElementBeforeModal, setFocusedElementBeforeModal] =
    useState(null);

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

    const handleFocus = (event) => {
      const dialog = document.querySelector("dialog");
      if (dialog && !dialog.contains(event.target)) {
        event.preventDefault();
        dialog.focus();
      }
    };

    // Disable focus on elements outside the dialog when the modal is open
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
                Please complete all required inputs. We're missing the following
                info:
              </div>
              {emptyKeys.length > 0 && (
                <ul>
                  {emptyKeys.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
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
