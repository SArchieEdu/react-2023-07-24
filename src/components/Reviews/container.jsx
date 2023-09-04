import { useGetReviewsQuery, useGetUsersQuery } from "../../store/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId, {
    skip: !restaurantId,
    refetchOnFocus: true,
  });

  const { isFetching: isUsersFetching } = useGetUsersQuery(undefined, {
    refetchOnFocus: true,
  });

  if (isFetching || isUsersFetching) {
    return <span>Loading....</span>;
  }

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
