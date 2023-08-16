import { useAuth } from "../../auth/index.js";
import { Button } from "../Button/component.jsx";
import { useState } from "react";
import { Modal } from "../Modal/component.jsx";
import { AuthForm } from "../AuthForm/component.jsx";

export const Header = () => {
  const { user, login, logout } = useAuth();
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  const handleModalLoginClick = ({ first_name, last_name }) => {
    login(first_name, last_name);
    setIsAuthModalVisible(false);
  }

  return (
    <header>
      {user ? (
        <div>
          Welcome, {user.first_name} {user.last_name} <Button onClick={() => logout()}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => setIsAuthModalVisible(true)}>Login</Button>
      )}

      {isAuthModalVisible &&
        <Modal>
          <AuthForm onLoginClick={handleModalLoginClick} />
        </Modal>
      }
    </header>
  )
}
