import { User } from "./component";
import { useGetUsersQuery } from "../../store/services/api";

export const UserContainer = ({ userId }) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      user: result.data?.find(({ id }) => id === userId),
    }),
  });

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
