import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../contexts/userContext";
import { selectAuthorizationModule } from "../../store/features/authorization/selectors";
import {
  login as actionLogin,
  logout as actionLogout,
} from "../../store/features/authorization";

export const UserContextProvider = ({ children }) => {
  const { currentUser } = useSelector(selectAuthorizationModule);
  const dispatch = useDispatch();

  const login = useCallback(
    (user) => {
      dispatch(actionLogin(user));
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch(actionLogout());
  }, [dispatch]);

  const userContextValue = useMemo(
    () => ({ currentUser, login, logout }),
    [currentUser, login, logout],
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
