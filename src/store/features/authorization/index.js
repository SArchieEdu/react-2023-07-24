import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  currentUser: undefined,
  startSessionTime: undefined,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: DEFAULT_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
      state.startSeesionTime = Date.now();
    },
    logout: () => {
      return DEFAULT_STATE;
    },
  },
});
