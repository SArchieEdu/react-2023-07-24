import { startLoadingReviews, finishLoadingReviews, failLoadingReviews } from "../action";

// Тупое решение, которое не будет учитывать повторной загрузки отзывов в случае,
// если мы создадим новый отзыв в базе и загрузим его из базы.
// let cache = new Set();

export const loadReviews = (restaurantId) => async (dispatch) => {
  // if (cache.has(restaurantId)) {
  //   return;
  // }

  // cache.add(restaurantId);

  dispatch(startLoadingReviews());

  try {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const data = await response.json();
    dispatch(finishLoadingReviews(data));
  } catch (error) {
    dispatch(failLoadingReviews(error));
  }
};
