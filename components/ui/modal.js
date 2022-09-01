import React, { useRef } from "react";

function Modal({ open, children }) {
  if (!open) return null;

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-gray-500/60" />
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
        {children}
      </div>
    </>
  );
}

export default Modal;
