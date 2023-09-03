import {useState} from "react";
import {UserContainer} from "../User/container";
import {NewReviewFormContainer} from "../NewReviewForm/container";

export const Review = ({review}) => {
  const [isEdit, setIsEdit] = useState(false);
  if (!review) {
    return null;
  }

  return (
    <>
      {isEdit ? (
        <NewReviewFormContainer
          isEdit={isEdit}
          review={review}
          setIsEdit={setIsEdit}
        />
      ) : (
        <div>
          <span>{review.text}</span>
          <UserContainer userId={review.userId} />
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </div>
      )}
    </>
  );
};
