import { LoginButton } from "../LoginButton/component";

import Logo from "./imgs/logo.svg";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.root}>
      <img src={Logo} />
      <LoginButton />
    </header>
  );
};
