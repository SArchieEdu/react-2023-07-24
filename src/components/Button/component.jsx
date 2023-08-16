import { useRef } from "react";
import "./style.scss";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(1);

  return (
    <button
      className={`btn ${disabled && "btn--disabled"}`}
      ref={ref}
      onClick={() => {
        onClick();
        clearInterval(ref.current);
        ref.current = undefined;
      }}
      disabled={disabled}>
      {children}
    </button>
  );
};
