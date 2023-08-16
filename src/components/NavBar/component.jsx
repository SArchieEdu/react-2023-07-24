import { useUserContext } from "../../contexts/userContext";
import { Button } from "../Button/component";
import "./style.scss";

export const NavBar = () => {
  const { username, toggleUsername } = useUserContext();

  return (
    <div className="nav-bar">
      <span>{username.username}</span>
      <Button onClick={toggleUsername}>{username}</Button>
    </div>
  );
};
