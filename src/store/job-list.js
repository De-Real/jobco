import { createSlice } from "@reduxjs/toolkit";
import { loadItems } from "./job-actions";

const initialState = {
  jobItems: [],
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {},
  extraReducers: {
    [loadItems.fulfilled]: (state, { payload }) => {
      state.jobItems = payload || [];
    },
  },
});

export const jobListActions = jobListSlice.actions;

export default jobListSlice.reducer;
