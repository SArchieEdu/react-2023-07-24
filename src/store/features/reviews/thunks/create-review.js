import { addReview } from "../action";

export const createReview = (restaurantId, fields) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  dispatch(addReview(data));
};
