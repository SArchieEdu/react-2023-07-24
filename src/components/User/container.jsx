import {useSelector} from "react-redux";
import {selectIsUserLoading} from "../../store/features/user/selectors";
import {selectUserById} from "../../store/features/user/selectors";
import {User} from "./component";

export const UserContainer = ({userId}) => {
  const isLoading = useSelector(selectIsUserLoading);
  const user = useSelector((state) => selectUserById(state, userId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
