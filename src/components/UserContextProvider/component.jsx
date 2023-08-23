import { useMemo } from "react";
import { UserContext } from "../../contexts/userContext";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserModule } from "../../store/features/user/selectors";

export const UserContextProvider = ({ children }) => {
  const { login: userLogin } = useSelector(selectUserModule);
  const dispatch = useDispatch();

  const login = useCallback(
    (user) => {
      dispatch({ type: "login", payload: user });
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch({ type: "logout" });
  }, [dispatch]);

  const userContextValue = useMemo(
    () => ({ currentUser: userLogin, login, logout }),
    [userLogin, login, logout],
  );

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
