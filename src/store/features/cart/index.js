import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

export const cartEntityAdapter = createEntityAdapter();

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartEntityAdapter.getInitialState(),
  reducers: {
    increment: (state, {payload} = {}) => {
      return {
        ...state,
        [payload]: (state[payload] || 0) + 1,
      };
    },
    decrement: (state, {payload} = {}) => {
      return {
        ...state,
        [payload]: (state[payload] || 0) - 1,
      };
    },
  },
});

export const {increment, decrement} = cartSlice.actions;
