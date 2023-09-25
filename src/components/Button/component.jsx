import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(); // (current: undefined)

  const theme = useContext(ThemeContext);

  //console.log('theme:', theme);

  return (
    <button
      className={styles.root}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
