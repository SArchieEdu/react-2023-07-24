import { useUserContext } from "../../contexts/userContext";

export const Footer = () => {
  const { username } = useUserContext();

  return (
    <footer>
      <div>Footer</div>
      <div>User name: {username}</div>
    </footer>
  );
};
