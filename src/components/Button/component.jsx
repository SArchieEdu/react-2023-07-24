import styles from './styles.module.scss';
import classNames from 'classnames';

export const Button = ({ children, onClick, disabled, type, switchType, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} 
    className={classNames(styles.root, className, {
      [styles.tabs]: type ==="tabs", 
      [styles.authoriazation]: type ==="authoriazation",
      [styles.btn_minus]: type ==="btn_minus",
      [styles.btn_plus]: type ==="btn_plus",
      [styles.tab]: type ==="tab",
      [styles.btn_theme]: type ==="btn_theme",
      [styles.dark]: switchType ==="dark",
      [styles.light]: switchType ==="light",
      [styles.auth_submit]: type ==="auth_submit",
      })}>
      {children}
    </button>
  );
};
