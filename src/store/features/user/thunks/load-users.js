import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUserIds} from "../selectors";

export const loadUsersIfNotExist = createAsyncThunk(
  "user/loadUsers",
  async () => {
    const response = await fetch(`http://localhost:3001/api/users`);
    return await response.json();
  },
  {
    condition: (_, {getState}) => {
      if (selectUserIds(getState()).length) {
        return;
      }
    },
  }
);
