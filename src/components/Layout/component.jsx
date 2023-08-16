import { UserProvider } from "../../contexts/userContext";
import { Footer } from "../Footer/component";
import { NavBar } from "../NavBar/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <UserProvider>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </UserProvider>
    </div>
  );
};
