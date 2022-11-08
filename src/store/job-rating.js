import { createSlice } from "@reduxjs/toolkit";

const jobRatingSlice = createSlice({
  name: "jobRating",
  initialState: {
    // IDs and rating is saving
    items: [],
  },
  reducers: {
    saveItemToRatedList: (state, { payload }) => {
      const foundItem = state.items.find((item) => item.id === payload.id);
      if (foundItem) {
        foundItem.rating = payload.rating;
      } else {
        state.items.push(payload);
      }
    },
  },
});

export const jobRatingActions = jobRatingSlice.actions;
export default jobRatingSlice.reducer;
