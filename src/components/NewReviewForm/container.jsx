import { NewReviewForm } from "./component";
import {
  useCreateReviewMutation,
  useEditReviewMutation,
  useGetUsersQuery,
} from "../../store/services/api";

export const NewReviewFormContainer = ({
  restaurantId,
  isEdit,
  review,
  setIsEdit,
}) => {
  const [createReview, {isLoading: isSaving}] = useCreateReviewMutation();
  const [editReview, {isLoading: isEditing}] = useEditReviewMutation();
  const {data: user} = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({id}) => id === review?.userId),
    }),
  });

  if (isSaving || isEditing) {
    return <span>Saving...</span>;
  }

  const handleSaveReview = (newReview) => {
    isEdit
      ? editReview({reviewId: review?.id, newReview})
      : createReview({restaurantId, newReview});
  };

  return (
    <NewReviewForm
      onSaveForm={handleSaveReview}
      isEdit={isEdit}
      review={review}
      user={user}
      setIsEdit={setIsEdit}
    />
  );
};
