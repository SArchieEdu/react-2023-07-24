import classNames from "classnames";

import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, type, className }) => {
  // console.log(styles);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className, {
        [styles.primary]: type === "primary",
      })}
    >
      {children}
    </button>
  );
};
