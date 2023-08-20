import { useContext } from "react";
import { Button } from "../Button/component";
import { AuthorizationContext } from "../../contexts/authorizationContext";

export const Layout = ({ children }) => {
  
const authorizationValue = useContext(AuthorizationContext)

  return (
    <div>
      <header>
        <Button onClick={
          () => {
            authorizationValue.authorization ? authorizationValue.setAuthorization(null) : authorizationValue.setAuthorization(true)
          } 
        }
        >
        {authorizationValue.authorization ? 'Vladimir' : 'Login'}
        </Button>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
