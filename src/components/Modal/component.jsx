import { createPortal } from "react-dom";

export const Modal = ({ children, open, onClose }) => {
  return (
    <>
      {open &&
        createPortal(
          <dialog open={open} onClose={onClose}>
            {children}
          </dialog>,
          document.body,
        )}
    </>
  );
};
