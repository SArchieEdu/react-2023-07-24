import { createAsyncThunk } from "@reduxjs/toolkit";

export const createReview = createAsyncThunk(
  "review/createReview",
  async ({ restaurantId, newReview }) => {
    const response = await fetch(
      `http://localhost:3001/api/review/${restaurantId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newReview),
      },
    );

    return await response.json();
  },
);
