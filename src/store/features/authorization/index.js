import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const authEntityAdapter = createEntityAdapter();

export const authSlice = createSlice({
  name: "cart",
  initialState: authEntityAdapter.getInitialState(),
  reducers: {
    login: (_, {payload} = {}) => {
      return {
        currentUser: payload,
        startSessionTime: Date.now(),
      };
    },
    logout: () => {
      return {
        currentUser: null,
        startSessionTime: null,
      };
    },
  },
});

export const {login, logout} = authSlice.actions;
