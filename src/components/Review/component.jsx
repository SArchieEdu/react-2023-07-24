import { useState } from "react";
import { UserContainer } from "../User/container";
import { NewReviewForm } from "../NewReviewForm/component";
import { useUpdateReviewMutation } from "../../store/services/api";
import { useCallback } from "react";

export const Review = ({ review }) => {
  const [updateReview, { isLoading }] = useUpdateReviewMutation();
  const [isEdit, setIsEdit] = useState(false);

  const handleSaveForm = useCallback(
    (values) => {
      updateReview({
        reviewId: review.id,
        review: values,
      });
    },
    [updateReview, review.id],
  );

  if (!review) {
    return null;
  }

  return (
    <div>
      {isEdit ? (
        <>
          <NewReviewForm
            isEdit={isEdit}
            isLoading={isLoading}
            reviewInitial={review}
            onSaveForm={handleSaveForm}
          />
          <button disabled={isLoading} onClick={() => setIsEdit(() => false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <UserContainer userId={review.userId} />
          <span>{review.text}</span>
          <button onClick={() => setIsEdit((state) => !state)}>Edit</button>
        </>
      )}
      <hr />
    </div>
  );
};
