import {addReview, failedAddNewReview} from "../action";

export const addNewReview =
  (restaurantId, {name, text, rating}) =>
  (dispatch, getState) => {
    console.log(restaurantId, name, text, rating);
    fetch(`http://localhost:3001/api/review/${restaurantId}`, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        name,
        text,
        rating,
      }),
    })
      .then((response) => response.json())
      .then((review) => dispatch(addReview(review)))
      .catch(() => dispatch(failedAddNewReview));
  };
