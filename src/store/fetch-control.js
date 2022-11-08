import { createSlice } from "@reduxjs/toolkit";
import { loadItems } from "./job-actions";

const fetchControlSlice = createSlice({
  name: "fetchControl",
  initialState: { status: "pending" },
  reducers: {},
  extraReducers: {
    [loadItems.pending]: (state) => {
      state.status = "pending";
    },
    [loadItems.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [loadItems.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default fetchControlSlice.reducer;
