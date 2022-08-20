import React from "react";

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <button onClick={onClose}>Close Modal</button>
      Test
      {children}
    </div>
  );
}

export default Modal;
