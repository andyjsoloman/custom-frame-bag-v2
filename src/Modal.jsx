import { useState } from "react";
import { ReactDOM } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <dialog
      open
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="modal-dialog"
    >
      <h2 id="dialog-title">Modal Dialog</h2>
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </dialog>,
    document.body
  );
}
