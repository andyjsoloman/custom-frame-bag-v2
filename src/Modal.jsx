import { useState, useEffect } from "react";
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

export default function Modal({ isOpen, onClose, children }) {
  const [focusedElementBeforeModal, setFocusedElementBeforeModal] =
    useState(null);

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
              <h2 id="dialog-title">Modal Dialog</h2>
              <button onClick={onClose} className="close-button">
                Ok
              </button>
              <div className="modal-content">{children}</div>
            </Dialog>
          </>,
          document.body
        )}
    </>
  );
}
