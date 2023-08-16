import ReactDOM from "react-dom";

const modalSelector = document.getElementById("modal");

export const Modal = ({children}) => {
  return ReactDOM.createPortal(<div>{children}</div>, modalSelector);
};
