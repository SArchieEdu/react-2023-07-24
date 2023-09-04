import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Restaurant", "Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Restaurant", id })),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: {
          restaurantId,
        },
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "Review", id }))
          .concat({ type: "Review", id: "LIST" }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: () => [{ type: "Review", id: "LIST" }],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `123review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Review", id: "LIST" }],
    }),
    getDishes: builder.query({
      query: ({ restaurantId, productId }) => ({
        url: "dishes",
        params: {
          restaurantId,
          productId,
        },
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useGetDishesQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} = api;
