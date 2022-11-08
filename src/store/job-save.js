import { createSlice } from "@reduxjs/toolkit";

const jobSaveSlice = createSlice({
  name: "jobSave",
  initialState: {
    //Only IDs is saving
    items: [],
    appliedItems: [],
  },
  reducers: {
    saveItemToList: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromList: (state, action) => {
      state.items = state.items.filter((item) => {
        console.log(item, action.payload);
        if (item !== action.payload) return true;
        return false;
      });
    },
    applyForJob: (state, { payload }) => {
      state.appliedItems.push(payload);
    },
  },
});

export const jobSaveActions = jobSaveSlice.actions;
export default jobSaveSlice.reducer;
