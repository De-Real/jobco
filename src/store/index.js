import { configureStore } from "@reduxjs/toolkit";

import fetchControlReducer from "./fetch-control";
import jobListReducer from "./job-list";
import jobSaveReducer from "./job-save";
import jobRatingReducer from "./job-rating";

const store = configureStore({
  reducer: {
    jobList: jobListReducer,
    jobSave: jobSaveReducer,
    jobRating: jobRatingReducer,
    fetchControl: fetchControlReducer,
  },
});

export default store;
