import ReactDOM from "react-dom";
import "./style.scss";

export const AppModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__header">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="modal__body">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};
