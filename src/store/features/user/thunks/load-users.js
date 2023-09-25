import { selectUserIds } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUsersIfNotExist = createAsyncThunk(
  "user/loadUsersIfNotExist",
  async () => {
    const response = fetch("http://localhost:3001/api/users/");
    return (await response).json();
  },
  {
    condition: (_, { getState }) => !selectUserIds(getState())?.length,
  }
);
