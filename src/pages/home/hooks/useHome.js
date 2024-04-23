import { useGetQuery } from "../../../services/networkRequestServices";
import { queryKeys } from "../../../services/queryKeys";
import { apiEndPoints } from "../../../services/apiEndPoints";

export const useHome = () => {
  const { data: users } = useGetQuery(
    queryKeys.USERS,
    apiEndPoints.USERS.ALL_USERS
  );

  return { users };
};
